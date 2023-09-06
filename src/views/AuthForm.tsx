import React, { FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Box } from '../components/Box';
import { rem } from 'polished';
import { H2, Normal } from '../styles/globalFontStyles';
import { InputField } from '../components/Inputs';
import { StyledButton } from '../components/Buttons/Button';
import { LoadButton } from '../components/Buttons/LoadButton';

export const AuthForm: FC<{ onSuccess: () => void }> = ({
  onSuccess,
}) => {
  const {
    signUpLoading,
    signUpError,
    signInLoading,
    signInError,
    whoAmI,
    isAccountExist,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    phoneNumber,
    setPhoneNumber,
    handleSingUp,
    handleSingIn,
    onSighChange,
  } = useAuth(onSuccess);
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      pr={rem(20)}
      pl={rem(20)}
      pb={rem(20)}
      pt={rem(32)}
      justifyContent={'center'}
      height={'auto'}
    >
      {!isAccountExist ? (
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          minWidth={rem(850)}
        >
          <H2 pb={rem(16)}>Создать аккаунт</H2>
          <form onSubmit={handleSingUp}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                marginGapVertical={20}
              >
                <InputField
                  placeholder={'Имя'}
                  label={'Имя*'}
                  id={'name'}
                  isRequired={true}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <InputField
                  placeholder={'Номер телефона'}
                  label={'Номер телефона*'}
                  id={'phone-number'}
                  isRequired={true}
                  type={'tel'}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
                <InputField
                  placeholder={'E-mail'}
                  label={'E-mail*'}
                  id={'e-mail'}
                  isRequired={true}
                  type={'email'}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <InputField
                  placeholder={'Пароль'}
                  label={'Пароль*'}
                  id={'password'}
                  isRequired={true}
                  type={'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Box>
              <Normal color={'red'}>{signUpError?.message}</Normal>
              <Box
                display={'flex'}
                alignItems={'center'}
                mt={rem(50)}
                marginGapHorizontal={16}
              >
                <LoadButton
                  loading={signUpLoading}
                  disabled={signUpLoading}
                >
                  Создать аккаунт
                </LoadButton>
                <StyledButton
                  variant={'outlineGray'}
                  onClick={onSighChange}
                >
                  Есть аккаунт
                </StyledButton>
              </Box>
            </Box>
          </form>
        </Box>
      ) : (
        <>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minWidth={rem(850)}
          >
            <H2 pb={rem(16)}>Логин</H2>
            <form onSubmit={handleSingIn}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  marginGapHorizontal={20}
                >
                  <InputField
                    placeholder={'E-mail'}
                    label={'E-mail*'}
                    id={'e-mail'}
                    isRequired={true}
                    type={'email'}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <InputField
                    placeholder={'Пароль'}
                    label={'Пароль*'}
                    id={'password'}
                    isRequired={true}
                    type={'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Box>
                <Normal color={'red'}>{signInError?.message}</Normal>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  mt={rem(50)}
                  marginGapHorizontal={16}
                >
                  <LoadButton
                    loading={signInLoading}
                    disabled={signInLoading}
                  >
                    Логин
                  </LoadButton>
                  <StyledButton
                    variant={'outlineGray'}
                    onClick={onSighChange}
                  >
                    Создать аккаунт
                  </StyledButton>
                </Box>
              </Box>
            </form>
          </Box>
        </>
      )}
    </Box>
  );
};
