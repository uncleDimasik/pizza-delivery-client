import React, { FC, useState } from 'react';
import styled from 'styled-components';
import img from '../../assets/checkmark.svg';
import { baseTheme, secondary } from '../../styles/config';
import { rem } from 'polished';

type Props = {
  name: string;
  label: string;
};

export const StyledButtonInput = styled.input`
  position: absolute;
  display: inline-block;
  opacity: 0;

  & + label {
    cursor: pointer;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    line-height: 1rem;
    padding: 0 0 0 1rem;
    transition: all 0.5s ease-in-out;

    span {
      margin-left: 0.5rem;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      text-align: center;
      top: 0;
      left: 0;
      width: 1rem;
      height: 1rem;
      border-radius: ${rem(2)};
      border: 1px solid ${baseTheme.grayText};
      background-color: ${secondary};
    }
  }

  &:checked {
    & + label::before {
      content: '';
      background: url(${img}) no-repeat;
      background-repeat: no-repeat;
      background-position: center center;
      background-color: ${baseTheme.primary};
      border: none;
    }

    & + label::after {
      border: none;
      background-color: transparent;
      left: ${rem(8 / 2)};
      top: ${rem(8 / 2)};
    }
  }

  &[type='radio'] {
    &:checked {
      & + label::before {
        content: '';
        border: 1px solid ${baseTheme.primary};
      }

      & + label::after {
        background-color: ${baseTheme.primary};
        border: none;
      }
    }

    & + label {
      &::before {
        border-radius: 50%;
        background: none;
        border: 1px solid ${baseTheme.grayText};
        background-color: ${secondary};
      }

      &::after {
        border: none;
        background: transparent;
        border-radius: 50%;
        width: ${rem(8)};
        height: ${rem(8)};
      }
    }
  }
`;

const CheckboxInput: FC<Props> = ({ name, label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(() => !isChecked);
  };

  return (
    <div>
      <StyledButtonInput
        type='checkbox'
        name={name}
        id={name}
        checked={isChecked}
        onChange={toggleCheck}
      />
      <label htmlFor={name}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxInput;
