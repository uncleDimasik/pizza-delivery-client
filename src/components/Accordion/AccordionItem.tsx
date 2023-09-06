import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { StyledWhiteOutlineWrapper } from '../StyledWhiteOutlineWrapper';
import { H4, Mini, Normal } from '../../styles/globalFontStyles';
import { backgroundColor, baseTheme } from '../../styles/config';
import { Box } from '../Box';
import { ArrowDownIcon } from '../../assets/Icons/ArrowDownIcon';
import { OrderItem } from '../../views/OrderItem';
import { StyledLine } from '../StyledLine';
import { Collapse } from './Collapse';
import {
  EnumOrderStatus,
  EnumPaymentType,
  MyOrdersQuery,
  useOrderItemLazyQuery,
} from '../../@generated/generated.graphql';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { ArrayElement } from '../../utils/arrayElementType';

const StyledAccordionHeader = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  position: relative;
  flex-direction: column;
`;
const StyledAccordionWrapper = styled.div`
  padding: ${rem(16)} ${rem(20)};
  border-radius: ${rem(12)};
  ${StyledWhiteOutlineWrapper}
}
`;
const StyledStatusBar = styled.div<{ color: string }>`
  width: ${rem(4)};
  background-color: ${(props) => props.color};
  border-radius: 24px;
`;
const StyledPreviewImage = styled.img`
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  outline: ${rem(1)} solid ${backgroundColor};
  margin-left: ${rem(-10)};
`;

const StyledItemsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: ${rem(16)};
`;

type OrdersType = MyOrdersQuery['orders'];
type OrdersArray = NonNullable<OrdersType>; // Ensure the array is not nullable

export type AccordionProps = ArrayElement<OrdersArray> & {
  header?: React.ReactNode;
  body?: React.ReactNode;
};

const statuses = new Map([
  [EnumOrderStatus.Pending, 'Обрабатывается'],
  [EnumOrderStatus.Shipped, 'Едет к вам'],
  [EnumOrderStatus.Completed, 'Выполнен'],
  [EnumOrderStatus.Canceled, 'Отмена'],
]);
const statusColors = new Map([
  [EnumOrderStatus.Pending, baseTheme.red],
  [EnumOrderStatus.Shipped, baseTheme.primary],
  [EnumOrderStatus.Completed, baseTheme.green],
  [EnumOrderStatus.Canceled, baseTheme.grayText],
]);

const paymentTypes = new Map([
  [EnumPaymentType.Cash, 'Наличкой'],
  [EnumPaymentType.Card, 'Картой'],
]);

// TODO - extract small components
// TODO - i18n
// TODO - define interface
// TODO - probably move to Views

export const AccordionItem: FC<AccordionProps> = ({
  header,
  body,
  id: orderId,
  number: orderNumber,
  totalPrice: orderPrice,
  status: orderStatus,
  paymentType: orderPayment,
  deliveryAddress,
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [getOrderItems, { data: orderItems, loading }] =
    useOrderItemLazyQuery();

  const handleOpen = () => {
    getOrderItems({
      variables: {
        where: {
          orderId: {
            equals: orderId,
          },
        },
      },
    }).then(() => {
      setOpen((prev) => !prev);
    });
  };

  function renderOrderItems() {
    if (loading) return <H4>Loading...</H4>;
    return (
      <StyledItemsWrapper>
        {orderItems?.orderItems &&
          orderItems.orderItems.map((item) => {
            if (item.customerDish) {
              return (
                <OrderItem
                  key={item.id}
                  quantity={item.quantity}
                  totalPrice={item.price}
                  name={item.customerDish.parentDish.name}
                  description={`${item.customerDish.parentDish.name}, ${item.customerDish.selectedOption.name}`}
                  images={item.customerDish.parentDish.images}
                />
              );
            } else {
              return (
                <OrderItem
                  key={item.id}
                  quantity={item.quantity}
                  totalPrice={item.price}
                  name={item.good!.name}
                  description={item.good!.description}
                  images={item.good!.images}
                />
              );
            }
          })}
      </StyledItemsWrapper>
    );
  }

  return (
    <StyledAccordionWrapper>
      <StyledAccordionHeader onClick={handleOpen}>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flex={1}
        >
          <Box display={'flex'}>
            <StyledStatusBar color={statusColors.get(orderStatus)!} />
            <Box
              display={'flex'}
              flexDirection={'column'}
              pl={rem(16)}
            >
              <Mini color={baseTheme.grayText} pb={rem(4)}>
                Заказ
              </Mini>
              <Box display={'flex'} alignItems={'center'}>
                <Normal>{`№${orderNumber}`}</Normal>
                <Mini color={baseTheme.grayText} pl={rem(8)}>
                  22.06.21
                </Mini>
              </Box>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Mini color={baseTheme.grayText} pb={rem(4)}>
              Сумма заказа
            </Mini>
            <Normal>
              {currencyFormatter('ru', parseFloat(orderPrice))}
            </Normal>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Mini color={baseTheme.grayText} pb={rem(4)}>
              Статус
            </Mini>
            <Normal>{statuses.get(orderStatus)}</Normal>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Mini color={baseTheme.grayText} pb={rem(4)}>
              Оплачено
            </Mini>
            <Normal>{paymentTypes.get(orderPayment)}</Normal>
          </Box>
          <ArrowDownIcon isOpen={isOpen} $fill={baseTheme.primary} />
          {header}
        </Box>
        <StyledLine mt={rem(16)} />
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          pt={rem(16)}
        >
          <Normal>{deliveryAddress}</Normal>
          {/* <Box */}
          {/*   display={'flex'} */}
          {/*   flexDirection={'row'} */}
          {/*   alignItems={'center'} */}
          {/* > */}
          {/*   <StyledPreviewImage src={MockImage} alt={'Preview'} /> */}
          {/*   <StyledPreviewImage src={MockImage} alt={'Preview'} /> */}
          {/*   <StyledPreviewImage src={MockImage} alt={'Preview'} /> */}
          {/* </Box> */}
        </Box>
      </StyledAccordionHeader>

      <Collapse isOpen={isOpen}>
        <Box display={'flex'} flexDirection={'column'}>
          <StyledLine mt={rem(16)} mb={rem(16)} />
          {renderOrderItems()}
          {/* <StyledLine mt={rem(16)} /> */}
          {/* <button> */}
          {/*   <Normal color={baseTheme.primary} pt={rem(16)}> */}
          {/*     Повторить заказ */}
          {/*   </Normal> */}
          {/* </button> */}
          {body}
        </Box>
      </Collapse>
    </StyledAccordionWrapper>
  );
};
