import React, { FC, FormEvent } from 'react';
import { StyledButtonInput } from './CheckboxInput';

type Props = {
  name: string;
  label: string;
  value: string;
  isChecked?: boolean;
  handleChange?: (id: string) => void;
};

const RadioInput: FC<Props> = ({
  name,
  label,
  value,
  isChecked,
  handleChange,
}) => {
  const handleRadioChange = (e: FormEvent<HTMLInputElement>) => {
    const { id } = e.currentTarget;
    handleChange ? handleChange(id) : '';
  };

  return (
    <div>
      <StyledButtonInput
        type='radio'
        name={name}
        id={value}
        checked={isChecked}
        onChange={handleRadioChange}
      />
      <label htmlFor={value}>
        <span>{label}</span>
      </label>
    </div>
  );
};

export default RadioInput;
