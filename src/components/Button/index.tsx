import React from 'react';

import Props from './types';
import { Container, Title } from './styles';
import { ActivityIndicator } from 'react-native';
import { Theme } from 'shared/styles';

const Button = ({ title, disabled, isLoading, id, onPress }: Props) => {
  return (
    <Container
      onPress={onPress}
      disabled={disabled || isLoading}
      testID={`button-${id}`}>
      {isLoading ? (
        <ActivityIndicator color={Theme.colors.disabledText} />
      ) : (
        <Title disabled={disabled}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
