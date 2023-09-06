import {
  useSignInMutation,
  useSignUpMutation,
  useWhoAmIQuery,
} from '../@generated/generated.graphql';
import { FormEvent, useState } from 'react';

export function useAuth(onSuccessAuth: () => void) {
  const [
    signUpMutation,
    { loading: signUpLoading, error: signUpError },
  ] = useSignUpMutation();
  const [
    signInMutation,
    { loading: signInLoading, error: signInError },
  ] = useSignInMutation();
  const { data: whoAmI, refetch: refetchWhoAmI } = useWhoAmIQuery();
  const [isAccountExist, setIsAccountExist] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSingUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpMutation({
      variables: {
        signUpInput: {
          email: email,
          name: name,
          password: password,
          phone: phoneNumber,
        },
      },
    }).then((r) => {
      if (r.data?.signUp.id) {
        onSuccessAuth();
        clearFields();
        refetchWhoAmI();
      }
    });
    console.log('signUp');
  };
  const handleSingIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInMutation({
      variables: {
        loginInput: {
          email: email,
          password: password,
        },
      },
    }).then((r) => {
      if (r.data?.signIn.id) {
        onSuccessAuth();
        clearFields();
        refetchWhoAmI();
      }
    });
    console.log('signIn');
  };

  function clearFields() {
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
  }

  const onSighChange = () => {
    clearFields();
    setIsAccountExist((prev) => !prev);
  };

  return {
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
  };
}
