import React from 'react';
import Lottie from 'lottie-react-native';

import { useAuth } from 'domains/Auth/hooks';

import { AdaptiveContainer, Button, SizedBox } from 'components';
import {
  Container,
  TitleContainer,
  Title,
  Subtitle,
  LottieContainer,
} from './styles';

const ProfileScreen = () => {
  const { user, isAuthLoading, signOut } = useAuth();

  return (
    <AdaptiveContainer>
      <Container>
        <SizedBox height="largest" />
        <LottieContainer>
          <Lottie
            source={require('assets/lottie/profile.json')}
            autoPlay
            loop
            style={{ height: 280 }}
          />
        </LottieContainer>

        <TitleContainer>
          <Title>Welcome!</Title>
          <SizedBox height="small" />
          <Subtitle>{user?.email}</Subtitle>
        </TitleContainer>
      </Container>

      <Button
        title="Logout"
        isLoading={isAuthLoading}
        disabled={isAuthLoading}
        onPress={signOut}
      />
    </AdaptiveContainer>
  );
};

export default ProfileScreen;
