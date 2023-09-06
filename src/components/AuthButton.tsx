import { Box } from './Box';
import { rem } from 'polished';
import { AccountIcon } from '../assets/Icons/AccountIcon';
import { Mini } from '../styles/globalFontStyles';
import React from 'react';
import { useWhoAmIQuery } from '../@generated/generated.graphql';
import Paths from '../router/globalRoutes/paths';
import { useNavigate } from 'react-router-dom';

export function AuthButton(props: { onClick: () => void }) {
  const { data: whoAmI, refetch: refetchWhoAmI } = useWhoAmIQuery();
  const navigate = useNavigate();
  const handleOpen = () => {
    if (whoAmI) {
      navigate(Paths.ACCOUNT_PAGE);
    } else {
      props.onClick();
    }
  };
  return (
    <button onClick={handleOpen}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        ml={rem(20)}
      >
        <AccountIcon />
        {whoAmI ? (
          <Mini ml={rem(8)}>Мой аккаунт</Mini>
        ) : (
          <Mini ml={rem(8)}>Войти в аккаунт</Mini>
        )}
      </Box>
    </button>
  );
}
