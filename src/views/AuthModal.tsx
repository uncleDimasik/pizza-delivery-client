import React, { FC } from 'react';
import { StyledModalCenter } from './ModalStyles';
import { AuthForm } from './AuthForm';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/useTypedRedux';
import { authModalSlice } from '../store/redusers/authModal/authModal.slice';

export const AuthModal: FC = () => {
  const { isAuthModalOpened } = useAppSelector(
    (state) => state.authModalSlice,
  );
  const { closeAuthModal } = authModalSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <>
      {/* {myButton({ onClick: openModal })} */}
      <StyledModalCenter
        isOpen={isAuthModalOpened}
        onRequestClose={() => dispatch(closeAuthModal())}
        contentLabel='Example Modal'
      >
        <AuthForm onSuccess={() => dispatch(closeAuthModal())} />
      </StyledModalCenter>
    </>
  );
};
