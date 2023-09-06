import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  baseTheme,
  borderRadius,
  typography,
} from '../../styles/config';
import { Box, box, BoxProps } from '../Box';
import { PlusIcon } from '../../assets/Icons/PlusIcon';
import { MinusIcon } from '../../assets/Icons/MinusIcon';

const StyledCounterButton = styled.div<BoxProps>`
  color: ${baseTheme.primary};
  background-color: ${baseTheme.lightPrimary};
  margin: 0;
  border-radius: ${borderRadius.xs};
  padding: ${rem(8)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${typography.desktop.subtitle2}
  ${box}
`;

interface Props {
  quantity: number;
  onChange: (arg: number) => void;
}

export const CounterButton: FC<Props> = ({ quantity, onChange }) => {
  const [counter, setCounter] = useState(quantity);

  const increase = () => {
    if (counter > 9) return;
    setCounter((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    if (counter <= 1) return;
    setCounter((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    onChange(counter);
  }, [counter]);

  return (
    <StyledCounterButton>
      <button type='button' onClick={decrease}>
        <MinusIcon />
      </button>
      <Box pr={rem(6)} pl={rem(6)}>
        <p>{counter}</p>
      </Box>
      <button type='button' onClick={increase}>
        <PlusIcon />
      </button>
    </StyledCounterButton>
  );
};
