import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { baseTheme, borderRadius } from '../styles/config';
import { StyledWhiteOutlineWrapper } from './StyledWhiteOutlineWrapper';
import { InferType, object, string } from 'yup';
import {
  useUpdateUserInfoMutation,
  useWhoAmIQuery,
} from '../@generated/generated.graphql';
import { useFormik } from 'formik';
import { Box } from './Box';
import { H3, Normal } from '../styles/globalFontStyles';
import { StyledButton } from './Buttons/Button';
import { InputField } from './Inputs';

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rem(24)} ${rem(32)} ${rem(24)} ${rem(32)};
  border-radius: ${borderRadius.s};
  margin-bottom: ${rem(20)};
  ${StyledWhiteOutlineWrapper}
`;

export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = object({
  name: string(),
  phoneNumber: string()
    .min(7)
    .matches(phoneRegExp, 'Phone number is not valid'),
  email: string().email(),
});

type WhoAmI = InferType<typeof validationSchema>;

export const ChangeInfoForm = () => {
  const { data } = useWhoAmIQuery();
  const [isInfoChanging, setIsInfoChanging] = useState(false);
  const [updateUser, { data: updatedUser, error }] =
    useUpdateUserInfoMutation();

  const formik = useFormik<WhoAmI>({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      updateUser({
        variables: {
          updateOneUserArgs: {
            email: values.email,
            phone: values.phoneNumber,
            name: values.name,
          },
        },
      }).then(() => {
        setIsInfoChanging(false);
        formik.resetForm();
      });
      // alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        name: data.whoAmI.name,
        phoneNumber: data.whoAmI.phone,
        email: data.whoAmI.email,
      });
    }
  }, [data]);

  return (
    <StyledFormWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          pb={rem(20)}
        >
          <H3 pb={rem(16)}>Личные данные</H3>
          <StyledButton
            variant={!isInfoChanging ? 'outline' : 'secondary'}
            paddingSize={'small'}
            type={'button'}
            onClick={() =>
              setIsInfoChanging((prevState) => !prevState)
            }
          >
            Изменить
          </StyledButton>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          marginGapHorizontal={20}
        >
          <InputField
            placeholder={'Имя'}
            label={'Имя*'}
            id={'name'}
            // isRequired={true}
            disabled={!isInfoChanging}
            value={formik.values.name}
            onChange={formik.handleChange}
            $errorMassage={formik.errors.name}
            $isError={!!(formik.touched.name && formik.errors.name)}
          />
          <InputField
            placeholder={'Номер телефона'}
            label={'Номер телефона*'}
            id={'phoneNumber'}
            // isRequired={true}
            disabled={!isInfoChanging}
            type={'tel'}
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            $errorMassage={formik.errors.phoneNumber}
            $isError={
              !!(
                formik.touched.phoneNumber &&
                formik.errors.phoneNumber
              )
            }
          />
          <InputField
            placeholder={'E-mail'}
            label={'E-mail*'}
            id={'email'}
            // isRequired={true}
            disabled={!isInfoChanging}
            type={'email'}
            value={formik.values.email}
            onChange={formik.handleChange}
            $errorMassage={formik.errors.email}
            $isError={!!(formik.touched.email && formik.errors.email)}
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
        {isInfoChanging ? (
          <StyledButton mt={rem(20)} width={'100%'} type={'submit'}>
            Сохранить измения
          </StyledButton>
        ) : (
          ''
        )}
      </form>
    </StyledFormWrapper>
  );
};
