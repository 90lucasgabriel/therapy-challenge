import React from 'react';
import Lottie from 'lottie-react-native';

import Props from './types';
import { Title, Label, SizedBox } from 'components';
import { Container, LottieContainer } from './styles';

const Content = ({ title, label, lottie }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Label>{label}</Label>
      <SizedBox height="xxLarge" />
      <LottieContainer>
        <Lottie source={lottie} autoPlay loop style={{ height: 220 }} />
      </LottieContainer>
      <SizedBox height="xxLarge" />
    </Container>
  );
};

export default Content;
