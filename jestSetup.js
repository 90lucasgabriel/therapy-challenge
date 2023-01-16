/**
 * react-native-keyboard-aware-scroll-view
 */
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareScrollView = ({ children }) => children;
  return { KeyboardAwareScrollView };
});

/**
 * @react-navigation/native
 */
export const mockedNavigationNavigate = jest.fn();
export const mockedNavigationPush = jest.fn();
export const mockedNavigationReplace = jest.fn();
export const mockedNavigationPop = jest.fn();
export const mockedNavigationPopToTop = jest.fn();
export const mockedNavigationCanGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigationNavigate,
      push: mockedNavigationPush,
      replace: mockedNavigationReplace,
      pop: mockedNavigationPop,
      popToTop: mockedNavigationPopToTop,
      canGoBack: mockedNavigationCanGoBack,
    }),
  };
});

/**
 * Domains and hooks mock
 */

/**
 * Auth Hooks
 */
let mockedUser = false;
export const mockedAuthUser = value => (mockedUser = value);
export const mockedSignInWithEmailAndPassword = jest.fn();
export const mockedSignOut = jest.fn();
jest.mock('domains/Auth/hooks', () => {
  return {
    useAuth: () => ({
      user: mockedUser,
      signInWithEmailAndPassword: ({ email, password }) =>
        mockedSignInWithEmailAndPassword({ email, password }),
      signOut: mockedSignOut,
    }),
  };
});
