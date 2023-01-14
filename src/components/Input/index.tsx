import React from 'react';
import { TextInput } from 'react-native';

import InputProps from 'components/Input/types';
import { Container, Label } from './styles';

const Input = ({ label }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput />
    </Container>
  );
};

export default Input;
