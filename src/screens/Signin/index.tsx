import React from 'react';

import { Container, Title } from './styles';
import Input from 'components/Input';

const SigninScreen = () => {
  return (
    <Container>
      <Title>Signin</Title>
      <Input label="E-mail" />
      <Input label="Senha" />
    </Container>
  );
};

export default SigninScreen;
