import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { StyledInputBase } from '../InputField';
import { BaseInputProps } from '../InputBase';
import { Box, box, BoxProps } from '../../Box';
import { borderRadius, typography } from '../../../styles/config';
import { rem } from 'polished';
import { ArrowDownIcon } from '../../../assets/Icons/ArrowDownIcon';
import { StyledWhiteOutlineWrapper } from '../../StyledWhiteOutlineWrapper';

const StyledDatePicker = styled(DatePicker)<
  BaseInputProps & BoxProps
>`
  ${StyledInputBase}
  ${box}
`;

const StyledDatePickerPopper = styled.div`
  .react-datepicker__header.react-datepicker__header--time.react-datepicker__header--time--only {
    padding: 0;

    .react-datepicker-time__header {
      ${StyledWhiteOutlineWrapper};
      padding: ${rem(8)};
      border-radius: ${borderRadius.xs};
      font-family: ${typography.font_family};
      ${typography.desktop.normal};
    }
  }

  .react-datepicker__time-list {
    ${typography.desktop.normal};
    ${StyledWhiteOutlineWrapper};
    border-radius: ${borderRadius.xs};
    font-family: ${typography.font_family};
  }
`;

export const InputTimePicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      position={'relative'}
      width={'fit-content'}
    >
      <StyledDatePicker
        showPopperArrow={false}
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        dateFormat='H:mm'
        timeFormat='H:mm'
        popperContainer={StyledDatePickerPopper}
        placeholderText='Введите время'
        pr={rem(55)}
        width={'100%'}
      />
      <Box right={rem(15)} position={'absolute'}>
        <ArrowDownIcon />
      </Box>
    </Box>
  );
};
