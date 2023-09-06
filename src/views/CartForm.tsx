import React, { FC, useState } from 'react';
import { H3 } from '../styles/globalFontStyles';
import { rem } from 'polished';
import { InputField, InputSelect } from '../components/Inputs';
import { Box } from '../components/Box';
import { StyledLine } from '../components/StyledLine';
import { useTranslation } from 'react-i18next';
import RadioInput from '../components/Inputs/RadioInput';
import { StyledComment } from '../components/StyledComment';
import { BottomBar } from './BottomBar';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/useTypedRedux';
import { InferType, number, object, string } from 'yup';
import { useFormik } from 'formik';
import Tab from '../components/Tab';
import {
  EnumOrderType,
  EnumPaymentType,
  OrderItemCreateWithoutOrderInput,
  useCreateOrderMutation,
  useRestaurantsQuery,
  useWhoAmILazyQuery,
} from '../@generated/generated.graphql';
import { authModalSlice } from '../store/redusers/authModal/authModal.slice';
import { cartSlice } from '../store/redusers/cartItem/cart.slice';
import { useNavigate } from 'react-router-dom';
import Paths from '../router/globalRoutes/paths';

const tabItems = [
  { id: '0', name: 'Доставка' },
  { id: '1', name: 'Самовывоз' },
];

export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = object({
  // name: string().required(),
  // phoneNumber: string()
  //   .required()
  //   .min(7)
  //   .matches(phoneRegExp, 'Phone number is not valid'),
  // email: string().required().email(),
  restaurant: object({
    value: string().required('Please select a restaurant'),
  }),
  payment: string(),
  deliveryAddress: string(),
  changeBy: string(),
  changeValue: number().typeError('Must be a number'),
  comment: string(),
});

type Order = InferType<typeof validationSchema>;

export const FoodDeliveryForm: FC = () => {
  const { t } = useTranslation();
  const { totalPrice, cartItems } = useAppSelector(
    (state) => state.cartSlice,
  );
  const { openAuthModal } = authModalSlice.actions;
  const { clearCart } = cartSlice.actions;
  const dispatch = useAppDispatch();
  const [isDelivery, setIsDelivery] = useState(true);
  const [withChange, setWithChange] = useState(true);
  const { data: restaurants } = useRestaurantsQuery();
  const [createOrder, { data, loading, error }] =
    useCreateOrderMutation();
  const [fetchWhoAmI, { data: whoAmI }] = useWhoAmILazyQuery();
  const navigate = useNavigate();
  const deliveryTabHandler = (id: string) => {
    if (id === '0') {
      setIsDelivery(true);
    } else {
      setIsDelivery(false);
    }
  };
  const withChangeHandler = (val: string) => {
    if (val === 'withChange') {
      setWithChange(true);
    } else setWithChange(false);
  };

  function getItems(): Array<OrderItemCreateWithoutOrderInput> {
    return cartItems.map((item) => {
      if (item.goodId) {
        return {
          good: {
            connect: {
              id: item.goodId,
            },
          },
          customerDish: undefined,
          price: item.totalPrice,
          quantity: item.quantity,
        };
      } else {
        return {
          customerDish: {
            create: {
              parentDish: {
                connect: {
                  id: item.customerDish!.parentDishId,
                },
              },
              price: item.customerDish!.price,
              selectedOption: {
                connect: {
                  id: item.customerDish!.selectedOptionsId,
                },
              },
              selectedToppings: {
                connect: item.customerDish!.selectedToppingsIds.map(
                  (toppingId) => ({ id: toppingId }),
                ),
              },
            },
          },
          good: undefined,
          price: item.totalPrice,
          quantity: item.quantity,
        };
      }
    });
  }

  const formik = useFormik<Order>({
    initialValues: {
      // name: '',
      // phoneNumber: '',
      // email: '',
      restaurant: { value: '' },
      payment: 'cash',
      deliveryAddress: '',
      changeBy: 'withoutChange',
      comment: '',
      changeValue: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      fetchWhoAmI()
        .then((data) => {
          if (!data.data?.whoAmI) {
            dispatch(openAuthModal());
          }
        })
        .then(() => {
          createOrder({
            variables: {
              data: {
                changeFor: values.changeValue,
                deliveryAddress: values.deliveryAddress,
                description: values.comment,
                orderType: isDelivery
                  ? EnumOrderType.Delivery
                  : EnumOrderType.Pickup,
                paymentType:
                  values.payment === 'cash'
                    ? EnumPaymentType.Cash
                    : EnumPaymentType.Card,
                restaurant: {
                  connect: {
                    id: values.restaurant.value,
                  },
                },
                totalPrice: totalPrice,
                items: {
                  create: getItems(),
                },
              },
            },
          }).then((data) => {
            formik.values = formik.initialValues;
            dispatch(clearCart());
            navigate(
              '/' +
                Paths.ORDER_SUCCESS_ROOT +
                data.data?.createOrder.number,
            );
          });
        });
      // alert(JSON.stringify(values, null, 2));
    },
  });

  function selectRestaurant() {
    return (
      <>
        {restaurants && (
          <InputSelect
            label={'Ресторан*'}
            id={'restaurant'}
            options={restaurants!.restaurants.map((e) => {
              return {
                value: e.id,
                label: ` ${e.name}, ${e.city}, ${e.address}`,
              };
            })}
            isRequired={true}
            onChange={(opt) =>
              formik.setFieldValue('restaurant', opt)
            }
            $errorMassage={formik.errors.restaurant?.value}
            $isError={
              !!(
                formik.touched.restaurant && formik.errors.restaurant
              )
            }
            onBlur={formik.handleBlur}
            placeholder={t(
              'base.selectRestaurant',
              'Выберите рестран',
            )}
          />
        )}
      </>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* <Box */}
      {/*   display={'flex'} */}
      {/*   justifyContent={'space-between'} */}
      {/*   marginGapHorizontal={20} */}
      {/*   pb={rem(20)} */}
      {/*   pt={rem(40)} */}
      {/* > */}
      {/*   <InputField */}
      {/*     placeholder={'Имя'} */}
      {/*     label={'Имя*'} */}
      {/*     id={'name'} */}
      {/*     isRequired={true} */}
      {/*     value={formik.values.name} */}
      {/*     onChange={formik.handleChange} */}
      {/*     $errorMassage={formik.errors.name} */}
      {/*     $isError={!!(formik.touched.name && formik.errors.name)} */}
      {/*   /> */}
      {/*   <InputField */}
      {/*     placeholder={'Номер телефона'} */}
      {/*     label={'Номер телефона*'} */}
      {/*     id={'phoneNumber'} */}
      {/*     isRequired={true} */}
      {/*     type={'tel'} */}
      {/*     value={formik.values.phoneNumber} */}
      {/*     onChange={formik.handleChange} */}
      {/*     $errorMassage={formik.errors.phoneNumber} */}
      {/*     $isError={ */}
      {/*       !!( */}
      {/*         formik.touched.phoneNumber && formik.errors.phoneNumber */}
      {/*       ) */}
      {/*     } */}
      {/*   /> */}
      {/*   <InputField */}
      {/*     placeholder={'E-mail'} */}
      {/*     label={'E-mail*'} */}
      {/*     id={'email'} */}
      {/*     isRequired={true} */}
      {/*     type={'email'} */}
      {/*     value={formik.values.email} */}
      {/*     onChange={formik.handleChange} */}
      {/*     $errorMassage={formik.errors.email} */}
      {/*     $isError={!!(formik.touched.email && formik.errors.email)} */}
      {/*   /> */}
      {/* </Box> */}
      <StyledLine mt={rem(50)} />
      <Box pt={rem(50)}>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          pb={rem(16)}
        >
          <H3>Ваш заказ</H3>
          <Box width={'100%'} maxWidth={rem(350)}>
            <Tab
              items={tabItems}
              selectedValue={deliveryTabHandler}
            />
          </Box>
        </Box>
        {isDelivery ? (
          <InputField
            placeholder={'Адресс'}
            label={'Адресс*'}
            id={'deliveryAddress'}
            isRequired={true}
            value={formik.values.deliveryAddress}
            onChange={formik.handleChange}
            $errorMassage={formik.errors.deliveryAddress}
            $isError={
              !!(
                formik.touched.deliveryAddress &&
                formik.errors.deliveryAddress
              )
            }
          />
        ) : (
          ''
        )}

        <Box pt={rem(30)}>{selectRestaurant()}</Box>
        <Box display={'flex'} flexDirection={'column'} pt={rem(16)}>
          <Box
            display={'flex'}
            pt={rem(20)}
            pb={rem(20)}
            flexDirection={'column'}
          >
            <H3>Оплата</H3>
            <Box
              display={'flex'}
              flexDirection={'row'}
              pt={rem(16)}
              marginGapHorizontal={20}
            >
              <RadioInput
                name='payment'
                value='cash'
                label='Наличными'
                isChecked={formik.values.payment === 'cash'}
                handleChange={(id) => {
                  withChangeHandler(id);
                  formik.setFieldValue('payment', id);
                }}
              />
              <RadioInput
                name='payment'
                value='card'
                label='Картой'
                isChecked={formik.values.payment === 'card'}
                handleChange={(id) => {
                  formik.setFieldValue('payment', id);
                }}
              />
            </Box>
          </Box>
          <StyledLine />
          <Box
            display={'flex'}
            pt={rem(20)}
            pb={rem(20)}
            flexDirection={'column'}
          >
            <H3>Сдача</H3>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              pt={rem(16)}
              marginGapHorizontal={20}
            >
              <RadioInput
                name='changeBy'
                value='withoutChange'
                label='Без сдачи'
                isChecked={formik.values.changeBy === 'withoutChange'}
                handleChange={(id) => {
                  withChangeHandler(id);
                  formik.setFieldValue('changeBy', id);
                }}
              />
              <RadioInput
                name='changeBy'
                value='withChange'
                label='Сдача с'
                isChecked={formik.values.changeBy === 'withChange'}
                handleChange={(id) => {
                  withChangeHandler(id);
                  formik.setFieldValue('changeBy', id);
                }}
              />
              {withChange ? (
                <InputField
                  placeholder={'Сдача с'}
                  id={'changeValue'}
                  isRequired={true}
                  type={'number'}
                  value={formik.values.changeValue?.toString()}
                  onChange={formik.handleChange}
                  $errorMassage={formik.errors.changeValue}
                  $isError={
                    !!(
                      formik.touched.changeValue &&
                      formik.errors.changeValue
                    )
                  }
                />
              ) : (
                ''
              )}
            </Box>
          </Box>
          <StyledLine />
          <Box
            display={'flex'}
            pt={rem(20)}
            pb={rem(20)}
            flexDirection={'column'}
          >
            <H3>Комментарий</H3>
            <Box display={'flex'}>
              <StyledComment
                placeholder={'Есть уточнения?'}
                id={'comment'}
                onChange={formik.handleChange}
                value={formik.values.comment}
              />
            </Box>
          </Box>
          <StyledLine />
          <Box
            display={'flex'}
            pt={rem(20)}
            pb={rem(20)}
            flexDirection={'column'}
          >
            <BottomBar
              price={totalPrice.toString()}
              disabledButton={!(totalPrice > 0)}
            />
          </Box>
        </Box>
      </Box>
    </form>
  );
};
