import React, { ChangeEvent, FC } from 'react';
import Select, {
  ActionMeta,
  components,
  DropdownIndicatorProps,
} from 'react-select';
import styled from 'styled-components';
import { BaseInputProps, InputBase } from './InputBase';
import {
  backgroundColor,
  baseTheme,
  borderRadius,
  color,
  line,
  typography,
} from '../../styles/config';
import { rem } from 'polished';
import { StyledWhiteOutlineWrapper } from '../StyledWhiteOutlineWrapper';
import { ArrowDownIcon } from '../../assets/Icons/ArrowDownIcon';

const StyledInputSelect = styled(Select)`
  .Select__control:hover {
    ${StyledWhiteOutlineWrapper};
  }

  .Select__indicators {
    padding-right: ${rem(16)};
  }

  .Select__control {
    min-width: ${rem(310)};
    border-radius: ${borderRadius.xs};
    ${typography.desktop.normal};
    ${StyledWhiteOutlineWrapper};
  }

  .Select__value-container {
    padding: ${rem(9)} ${rem(16)};
  }

  .Select__control--is-focused {
    outline: none;
    box-shadow: none;
    border-color: ${baseTheme.primary} !important;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    ${StyledWhiteOutlineWrapper};
  }

  .Select__option--is-focused {
    color: ${color};
    background-color: ${backgroundColor};

    &:active {
      background-color: transparent;
    }
  }

  .Select__option--is-selected {
    color: ${color};
    background-color: ${line};

    &:active {
      background-color: transparent;
    }
  }

  .Select__placeholder {
    ${typography.desktop.normal};
    color: ${baseTheme.grayText};
  }

  .Select__single-value {
    ${typography.desktop.normal};
    color: ${color};
  }
`;

type Props<T> = {
  options: ReadonlyArray<any>;
  name?: string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (option: T | null, actionMeta: ActionMeta<T>) => void;
  placeholder?: string;
  isRequired?: boolean;
  value?: T;
};

const DropdownIndicator: FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownIcon isOpen={props.selectProps.menuIsOpen} />
    </components.DropdownIndicator>
  );
};

export const InputSelect: FC<Props<unknown> & BaseInputProps> = ({
  options,
  label,
  name,
  placeholder,
  onChange,
  isRequired,
  $isError,
  id,
  value,
  onBlur,
}) => {
  return (
    <InputBase label={label} $isError={$isError} id={id}>
      <StyledInputSelect
        classNamePrefix='Select'
        placeholder={placeholder}
        name={name}
        value={value}
        required={isRequired}
        onChange={onChange}
        isDisabled={false}
        isLoading={false}
        isClearable={false}
        isSearchable={true}
        options={options}
        onBlur={onBlur}
        components={{ DropdownIndicator }}
      />
    </InputBase>
  );
};
