import React from 'react';

import Props from './types';
import { Container, Title } from './styles';
import { ActivityIndicator } from 'react-native';

const Button = ({ title, disabled, isLoading, onPress }: Props) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Title disabled={disabled}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
