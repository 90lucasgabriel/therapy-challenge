import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from 'navigation/app.routes';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Navigation;
