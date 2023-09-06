import React, { FC } from 'react';
import useModal from '../../hooks/useModal';
import { StyledModalCenter } from '../ModalStyles';
import { Box } from '../../components/Box';
import { rem } from 'polished';
import { StyledButton } from '../../components/Buttons/Button';
import { useTranslation } from 'react-i18next';
import { H4, Normal } from '../../styles/globalFontStyles';
import styled from 'styled-components';
import { useGoodQuery } from '../../@generated/generated.graphql';
import { FireIcon } from '../../assets/Icons/FireIcon';
import { BottomBar } from '../BottomBar';
import { cartSlice } from '../../store/redusers/cartItem/cart.slice';
import { useAppDispatch } from '../../hooks/useTypedRedux';
import { CartItemEnum } from '../../store/redusers/cartItem/types';

const StyledPreview = styled.img`
  width: 100%;
  max-height: ${rem(450)};
  object-fit: contain;
`;

const StyledModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: ${rem(20)};
  padding-bottom: ${rem(20)};
  padding-top: ${rem(32)};
  justify-content: space-between;
  transition: all 0.4s ease-in-out;
`;

export const GoodModal: FC<{ id: string }> = (props) => {
  const { handleClose, handleOpen, open } = useModal();
  const { t } = useTranslation();
  const { addToCart } = cartSlice.actions;
  const dispatch = useAppDispatch();
  const { data } = useGoodQuery({
    variables: {
      where: {
        id: props.id,
      },
    },
  });

  return (
    <>
      <StyledButton onClick={handleOpen}>
        {t('base.Choose')}
      </StyledButton>
      <StyledModalCenter
        isOpen={open}
        onRequestClose={handleClose}
        contentLabel='Example Modal'
      >
        <StyledModalWrapper>
          {/* <Box position={'absolute'}>*/}
          {/*  <StyledItemLabel size={'big'}>NEW</StyledItemLabel>*/}
          {/* </Box>*/}
          {data && (
            <>
              <Box
                pt={rem(40)}
                pb={rem(40)}
                display={'flex'}
                pr={rem(60)}
                pl={rem(60)}
                width={rem(570)}
                height={rem(570)}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <StyledPreview
                  src={data!.good.images![0]}
                  alt={'Preview'}
                />
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                flex={'0 1 auto'}
                height={'100%'}
              >
                <Box display={'flex'} alignItems={'flex-end'}>
                  <FireIcon />
                  <H4>{data.good.name}</H4>
                </Box>
                <Box
                  display={'flex'}
                  pt={rem(16)}
                  marginGapHorizontal={20}
                  pb={rem(24)}
                  width={rem(570)}
                >
                  <Normal>{data.good.description}</Normal>
                </Box>
                <Box pt={rem(22)}>
                  <BottomBar
                    price={data.good.price}
                    buttonText={'Добавить'}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          price: parseFloat(data?.good.price),
                          quantity: 1,
                          totalPrice:
                            parseFloat(data?.good.price) * 1,
                          type: CartItemEnum.good,
                          goodId: data?.good.id,
                          customerDish: undefined,
                        }),
                      );
                      handleClose();
                    }}
                  />
                </Box>
              </Box>
            </>
          )}
        </StyledModalWrapper>
      </StyledModalCenter>
    </>
  );
};
