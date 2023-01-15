import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, LabelContainer, Label } from './styles';
import { Theme } from 'shared/styles';
import SizedBox from 'components/SizedBox';

const Alert = ({ children }: any) => {
  if (!children) {
    return null;
  }

  return (
    <Container>
      <Feather name="alert-circle" size={19} color={Theme.colors.error} />
      <SizedBox width="small" />
      <LabelContainer>
        <Label>{children}</Label>
      </LabelContainer>
    </Container>
  );
};

export default Alert;
