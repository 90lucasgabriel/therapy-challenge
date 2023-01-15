import React from 'react';

import { useAuth } from 'domains/Auth/hooks';

import { Button } from 'components';
import { Container, Title } from './styles';

const ProfileScreen = () => {
  const { user, isAuthLoading, signOut } = useAuth();

  return (
    <Container>
      <Title>Hello, {user?.email}!</Title>

      <Button title="Logout" isLoading={isAuthLoading} onPress={signOut} />
    </Container>
  );
};

export default ProfileScreen;
