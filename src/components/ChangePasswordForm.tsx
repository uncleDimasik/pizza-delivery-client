import React, { useState } from 'react';
import { Box } from './Box';
import { rem } from 'polished';
import { H3, Normal } from '../styles/globalFontStyles';
import { StyledButton } from './Buttons/Button';
import { InputField } from './Inputs';
import styled from 'styled-components';
import { baseTheme, borderRadius } from '../styles/config';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';
import { InferType, object, ref, string } from 'yup';
import { useFormik } from 'formik';
import { useUpdatePasswordMutation } from '../@generated/generated.graphql';

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} ${rem(32)} ${rem(24)} ${rem(32)};
  border-radius: ${borderRadius.s};
  margin-bottom: ${rem(20)};
  ${StyledWhiteOutlineWrapper}
`;
const validationSchema = object({
  oldPassword: string().required('No password provided.'),
  newPassword: string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  passwordConfirmation: string()
    .oneOf([ref('newPassword')], 'Passwords must match')
    .required('Required'),
});
type Password = InferType<typeof validationSchema>;
export const ChangePasswordForm = () => {
  const [isPasswordChanging, setIsPasswordChanging] = useState(false);
  const [updatePassword, { data, error }] =
    useUpdatePasswordMutation();
  const formik = useFormik<Password>({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      updatePassword({
        variables: {
          updateUserPassword: {
            passwordOld: values.oldPassword,
            passwordConfirm: values.passwordConfirmation,
            passwordNew: values.newPassword,
          },
        },
      }).then(() => {
        setIsPasswordChanging(false);
        formik.resetForm();
      });
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <StyledFormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            pb={rem(20)}
          >
            <H3 pb={rem(16)}>Изменить пароль</H3>
            <StyledButton
              variant={!isPasswordChanging ? 'outline' : 'secondary'}
              paddingSize={'small'}
              type={'button'}
              onClick={() =>
                setIsPasswordChanging((prevState) => !prevState)
              }
            >
              Изменить
            </StyledButton>
          </Box>
          {isPasswordChanging ? (
            <>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                marginGapHorizontal={20}
              >
                <InputField
                  placeholder={'Старый пароль'}
                  label={'Старый пароль*'}
                  id={'oldPassword'}
                  isRequired={true}
                  type={'password'}
                  value={formik.values.oldPassword}
                  onChange={formik.handleChange}
                  $errorMassage={formik.errors.oldPassword}
                  $isError={
                    !!(
                      formik.touched.oldPassword &&
                      formik.errors.oldPassword
                    )
                  }
                />
                <InputField
                  placeholder={'Новый пароль'}
                  label={'Новый пароль*'}
                  id={'newPassword'}
                  isRequired={true}
                  type={'password'}
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  $errorMassage={formik.errors.newPassword}
                  $isError={
                    !!(
                      formik.touched.newPassword &&
                      formik.errors.newPassword
                    )
                  }
                />
                <InputField
                  placeholder={'Подтвердите пароль'}
                  label={'Подтвердите пароль*'}
                  id={'passwordConfirmation'}
                  isRequired={true}
                  type={'password'}
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                  $errorMassage={formik.errors.passwordConfirmation}
                  $isError={
                    !!(
                      formik.touched.passwordConfirmation &&
                      formik.errors.passwordConfirmation
                    )
                  }
                />
              </Box>
              <Normal
                color={baseTheme.red}
                width={'100%'}
                textAlign={'center'}
                pt={rem(20)}
              >
                {error?.message}
              </Normal>
            </>
          ) : (
            ''
          )}

          {isPasswordChanging ? (
            <>
              <StyledButton
                mt={rem(20)}
                width={'100%'}
                type={'submit'}
              >
                Сохранить измения
              </StyledButton>
            </>
          ) : (
            ''
          )}
        </form>
      </StyledFormWrapper>
    </div>
  );
};
