import * as React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { ButtonLoaderIcon } from '../../assets/Icons/ButtonLoaderIcon';

const LoaderWrapper = styled.div`
  padding-right: ${rem(8)};
  padding-top: ${rem(1)};
`;

export const ButtonLoader: FC = () => (
  <LoaderWrapper>
    <ButtonLoaderIcon />
  </LoaderWrapper>
);
