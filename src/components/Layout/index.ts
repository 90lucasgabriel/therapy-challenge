import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Theme } from 'shared/styles';
import Props from './types';

export const AdaptiveContainer = styled(KeyboardAwareScrollView).attrs(
  ({ paddingBottom }: Props) => ({
    extraHeight: 140,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      paddingBottom: paddingBottom ?? 16,
    },
  }),
)<Props>`
  background: ${props => props?.background || Theme.colors.background};
  padding: 0 ${Theme.sizes.medium};
`;
