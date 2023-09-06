import React, {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { H3 } from '../styles/globalFontStyles';
import { rem } from 'polished';
import { InputField } from '../components/Inputs';
import styled from 'styled-components';
import { StyledWhiteOutlineWrapper } from '../components/StyledWhiteOutlineWrapper';
import { borderRadius } from '../styles/config';
import { Box } from '../components/Box';
import CheckboxInput from '../components/Inputs/CheckboxInput';
import {
  EnumOrderType,
  EnumPaymentType,
  useWhoAmIQuery,
} from '../@generated/generated.graphql';
import { InferType, number, object, string } from 'yup';
import { useFormik } from 'formik';
import Paths from '../router/globalRoutes/paths';
import { StyledButton } from '../components/Buttons/Button';
import { ChangeInfoForm } from '../components/ChangeInfoForm';
import { ChangePasswordForm } from '../components/ChangePasswordForm';

const AccountSettingsView = () => {
  return (
    <>
      <ChangeInfoForm />
      <ChangePasswordForm />
      {/* <StyledFormWrapper> */}
      {/*   <H3 pb={rem(16)}>Подписки</H3> */}
      {/*   <CheckboxInput */}
      {/*     name={'notification'} */}
      {/*     label={'Получать предложения и акции'} */}
      {/*   /> */}
      {/* </StyledFormWrapper> */}
    </>
  );
};

export default AccountSettingsView;
