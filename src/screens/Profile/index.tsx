import React, { useMemo } from 'react';
import Lottie from 'lottie-react-native';

import { useAuth } from 'domains/Auth/hooks';

import ListTileItemProps from 'components/ListTile/ListTileItem/types';
import { Title, Label, SizedBox, ListTile } from 'components';
import {
  CustomAdaptiveContainer,
  Container,
  TitleContainer,
  LottieContainer,
} from './styles';

const ProfileScreen = () => {
  const { user, signOut } = useAuth();

  const menuList = useMemo((): ListTileItemProps[] => {
    return [
      {
        icon: 'log-out',
        label: 'Logout',
        onPress: signOut,
      },
      {
        icon: 'heart',
        label: 'Favorites',
      },
      {
        icon: 'user',
        label: 'My Account',
      },
      {
        icon: 'settings',
        label: 'Settings',
      },
      {
        icon: 'bell',
        label: 'Notifications',
      },
      {
        icon: 'help-circle',
        label: 'Help',
      },
      {
        icon: 'lock',
        label: 'Privacy',
      },
      {
        icon: 'shield',
        label: 'Security',
      },
      {
        icon: 'info',
        label: 'About',
      },
    ];
  }, [signOut]);

  return (
    <CustomAdaptiveContainer>
      <Container>
        <SizedBox height="largest" />
        <LottieContainer>
          <Lottie
            source={require('assets/lottie/profile.json')}
            autoPlay
            loop
            style={{ height: 300 }}
          />
        </LottieContainer>

        <TitleContainer>
          <Title>Welcome!</Title>
          <SizedBox height="small" />
          <Label>{user?.email}</Label>
        </TitleContainer>

        <ListTile data={menuList} />
      </Container>
    </CustomAdaptiveContainer>
  );
};

export default ProfileScreen;
