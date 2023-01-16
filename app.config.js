export default {
  expo: {
    name: 'vittude',
    slug: 'vittude',
    package: '',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'br.com.lucasgabriel.vittude',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './src/assets/images/favicon.png',
    },
    extra: {
      eas: {
        projectId: '0819cb15-4799-45b4-9d2f-9cb3d323b211',
      },
    },
  },
};
