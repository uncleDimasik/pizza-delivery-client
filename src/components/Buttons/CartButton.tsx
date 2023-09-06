import * as React from 'react';
import { FC } from 'react';
import { rem } from 'polished';
import { useTranslation } from 'react-i18next';
import { Box } from '../Box';
import { ButtonProps, StyledButton } from './Button';
import { currencyFormatter } from '../../utils/currencyFormatter';
import { CartIcon } from '../../assets/Icons/CartIcon';

type Props = {
  value: number;
};

export const CartButton: FC<Props & ButtonProps> = ({
  onClick,
  value,
}) => {
  const { i18n } = useTranslation();
  return (
    <StyledButton
      onClick={onClick}
      fontVariant={'bold'}
      paddingSize={'small'}
    >
      <CartIcon />
      <Box pl={rem(8)}>{currencyFormatter(i18n.language, value)}</Box>
    </StyledButton>
  );
};
