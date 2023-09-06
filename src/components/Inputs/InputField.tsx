import React, {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  PropsWithChildren,
} from 'react';
import styled, { css } from 'styled-components';
import {
  baseTheme,
  borderRadius,
  typography,
} from '../../styles/config';
import { rem } from 'polished';
import { BaseInputProps, InputBase } from './InputBase';
import { box, BoxProps } from '../Box';
import { StyledWhiteOutlineWrapper } from '../StyledWhiteOutlineWrapper';

export type InputProps = {
  name?: string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isRequired?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: string;
  id?: string;
};

export const StyledInputBase = css<BaseInputProps>`
  border-radius: ${borderRadius.xs};
  padding: ${rem(12)} ${rem(15)};
  ${typography.desktop.normal};
  ${StyledWhiteOutlineWrapper};

  &::placeholder {
    ${typography.desktop.normal};
    color: ${baseTheme.grayText};
  }

  &:focus {
    outline: none;
    border-color: ${baseTheme.primary};
  }

  ${(p) =>
    p.$isError &&
    css`
      border-color: ${baseTheme.red};

      &::placeholder {
        color: ${baseTheme.red};
      }
    `};

  ${(p) =>
    p.disabled &&
    css`
      border: none !important;
      padding: 0;
    `};
`;

export const StyledInput = styled.input<
  InputProps & BaseInputProps & BoxProps
>`
  width: 100%;
  ${StyledInputBase}
  ${box}
`;

export const InputField: FC<
  InputProps & BaseInputProps & PropsWithChildren
> = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  isRequired,
  $isError,
  $errorMassage,
  children,
  id,
  disabled,
}) => {
  return (
    <InputBase
      label={label}
      $isError={$isError}
      $errorMassage={$errorMassage}
      id={id}
    >
      <StyledInput
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
        $isError={$isError}
        id={id}
        disabled={disabled}
      />
      {children}
    </InputBase>
  );
};
