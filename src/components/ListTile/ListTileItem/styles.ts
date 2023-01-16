import styled from 'styled-components/native';
import { Theme } from 'shared/styles';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background: ${Theme.colors.white};
  padding: ${Theme.sizes.medium} ${Theme.sizes.large};
  align-items: center;
`;

export const LabelContainer = styled.View`
  flex: 1;
`;
