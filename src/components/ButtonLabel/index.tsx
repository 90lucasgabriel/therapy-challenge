import React from 'react';

import Props from './types';
import { Container, Title } from './styles';

const ButtonLabel = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ButtonLabel;
