import React, { FC, PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';
import { rem } from 'polished';
import {
  baseTheme,
  borderRadius,
  typography,
} from '../styles/config';
import { Mini, MiniBold } from '../styles/globalFontStyles';
import { Box } from './Box';
import { DoneIcon } from '../assets/Icons/DoneIcon';
import { useTranslation } from 'react-i18next';
import { currencyFormatter } from '../utils/currencyFormatter';

const StyledCategory = styled.button<
  Omit<Props, 'description' | 'clickHandler' | 'id'>
>`
  width: min-content;
  padding: ${rem(32)};
  border-radius: ${borderRadius.s};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${StyledWhiteOutlineWrapper};
  ${typography.desktop.bigText};
  ${({ isIncluded }) => {
    if (isIncluded === true) {
      return css`
        border-color: ${baseTheme.primary} !important;
      `;
    }
  }};
`;

// fill: ${(props) =>
//   props.isIncluded === false
//     ? baseTheme.grayText
//     : baseTheme.primary};

type Props = {
  description: string;
  isIncluded?: boolean;
  value?: number;
  id?: string;
  clickHandler?: (id: string) => void;
};

export const IngredientPlate: FC<Props & PropsWithChildren> = ({
  children,
  description,
  // isIncluded,
  value,
  id,
  clickHandler,
}) => {
  const { i18n } = useTranslation();
  const [isIncluded, setIsIncluded] = useState<boolean>(false);
  const onToppingClickHandler = () => {
    if (clickHandler && id) clickHandler(id);
    setIsIncluded((prevState) => !prevState);
  };
  return (
    <Box
      display={'flex'}
      width={'min-content'}
      position={'relative'}
      flexDirection={'column'}
    >
      {isIncluded !== undefined ? (
        <Box position={'absolute'} alignSelf={'flex-end'} p={rem(8)}>
          {/* {isIncluded ? <DoneIcon /> : <DeleteIcon />}*/}
          {isIncluded ? <DoneIcon /> : ''}
        </Box>
      ) : (
        ''
      )}
      <StyledCategory
        isIncluded={isIncluded}
        onClick={onToppingClickHandler}
      >
        {children}
      </StyledCategory>
      <Mini
        textAlign={'center'}
        pt={rem(8)}
        // color={isIncluded === false ? baseTheme.grayText : 'inherit'}
      >
        {description}
      </Mini>
      {value ? (
        <MiniBold
          color={baseTheme.primary}
          alignSelf={'center'}
          pt={rem(4)}
        >
          {currencyFormatter(i18n.language, value)}
        </MiniBold>
      ) : (
        ''
      )}
    </Box>
  );
};
