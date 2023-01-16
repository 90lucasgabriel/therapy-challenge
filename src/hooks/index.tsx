import React from 'react';

import { AuthProvider } from 'domains/Auth/hooks';

const AppProvider = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
