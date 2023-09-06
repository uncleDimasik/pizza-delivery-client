import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';
import { rem } from 'polished';
import {
  baseTheme,
  borderRadius,
  typography,
} from '../styles/config';
import { Box } from './Box';

const StyledCategory = styled.button<{ isSales?: boolean }>`
  width: min-content;
  padding: ${rem(19)} ${rem(39)};
  border-radius: ${borderRadius.s};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${StyledWhiteOutlineWrapper};
  ${typography.desktop.bigText};
  color: ${(props) => (props.isSales ? baseTheme.red : 'inherit')};
`;

type Props = {
  description: string;
  isSales?: boolean;
};

const Category: FC<Props & PropsWithChildren> = ({
  children,
  description,
  isSales,
}) => {
  return (
    <StyledCategory isSales={isSales}>
      {children}
      <Box pt={rem(8)}>{description}</Box>
    </StyledCategory>
  );
};

export default Category;
