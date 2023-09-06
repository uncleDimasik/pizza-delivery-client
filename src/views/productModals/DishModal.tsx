import React, { FC } from 'react';
import useModal from '../../hooks/useModal';
import { StyledModalCenter } from '../ModalStyles';
import { Box } from '../../components/Box';
import { rem } from 'polished';
import { StyledButton } from '../../components/Buttons/Button';
import { useTranslation } from 'react-i18next';
import { H4, Subtitle2 } from '../../styles/globalFontStyles';
import { IngredientPlate } from '../../components/IngredientPlate';
import Tab from '../../components/Tab';
import styled from 'styled-components';
import { BottomBar } from '../BottomBar';
import { SvgInline } from '../../utils/SvgInLine';
import { cartSlice } from '../../store/redusers/cartItem/cart.slice';
import { useAppDispatch } from '../../hooks/useTypedRedux';
import { CartItemEnum } from '../../store/redusers/cartItem/types';
import { useDishModal } from '../../hooks/useDishModal';

const StyledPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledModalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: ${rem(20)};
  padding-bottom: ${rem(20)};
  padding-top: ${rem(32)};
  min-height: ${rem(620)};
  justify-content: space-between;
  transition: all 0.4s ease-in-out;
`;

export const DishModal: FC<{ id: string }> = (props) => {
  const { handleClose, handleOpen, open } = useModal();
  const { t } = useTranslation();
  const { addToCart } = cartSlice.actions;
  const dispatch = useAppDispatch();
  const {
    selectedOptionHandler,
    toppingHandler,
    price,
    selectedOption,
    data,
    includedToppings,
  } = useDishModal(props.id);

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
                alignItems={'center'}
                justifyContent={'center'}
              >
                <StyledPreview
                  src={data!.dish.images![0]}
                  alt={'Preview'}
                />
              </Box>
              <Box
                display={'flex'}
                flexDirection={'column'}
                flex={'0 1 auto'}
              >
                <Box display={'flex'} alignItems={'flex-end'}>
                  {/* <FireIcon />*/}
                  <H4>{data.dish.name}</H4>
                </Box>
                <Box
                  display={'flex'}
                  pt={rem(16)}
                  marginGapHorizontal={20}
                  pb={rem(24)}
                >
                  {data.dish.ingradients?.map((item) => (
                    <IngredientPlate
                      key={item.id}
                      description={item.name}
                      id={item.id}
                    >
                      <Box width={rem(40)} height={rem(40)}>
                        <SvgInline url={item.image} />
                      </Box>
                    </IngredientPlate>
                  ))}
                </Box>
                <Tab
                  items={data.dish!.options!}
                  selectedValue={selectedOptionHandler}
                />
                {/* <Box pt={rem(16)}>*/}
                {/*  <Tab />*/}
                {/* </Box>*/}
                <Subtitle2 pt={rem(24)}>Добавьте в пиццу</Subtitle2>
                <Box
                  display={'flex'}
                  pt={rem(16)}
                  marginGapHorizontal={20}
                >
                  {data.dish?.options
                    ?.find((opt) => opt.id === selectedOption)
                    ?.toppings?.map((item) => (
                      <IngredientPlate
                        description={item.ingredientLabel.name}
                        value={parseFloat(item.price)}
                        key={item.id}
                        id={item.id}
                        clickHandler={(id) =>
                          toppingHandler(id, parseFloat(item.price))
                        }
                      >
                        {item.ingredientLabel.image && (
                          <SvgInline
                            url={item.ingredientLabel.image}
                          />
                        )}
                      </IngredientPlate>
                    ))}
                </Box>
                <Box pt={rem(22)}>
                  <BottomBar
                    price={price}
                    buttonText={'Добавить'}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          price: parseFloat(price),
                          quantity: 1,
                          totalPrice: parseFloat(price) * 1,
                          type: CartItemEnum.dish,
                          goodId: undefined,
                          customerDish: {
                            parentDishId: props.id,
                            price: parseFloat(price),
                            selectedOptionsId: selectedOption,
                            selectedToppingsIds: includedToppings,
                          },
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
