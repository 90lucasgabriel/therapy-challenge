import React from 'react';

import Props from './types';
import { Container, Title } from './styles';

const Button = ({ title, disabled, onPress }: Props) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
