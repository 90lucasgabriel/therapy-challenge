import { Theme } from 'shared/styles';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${Theme.sizes.large};
  color: ${Theme.colors.secondary};
  line-height: ${Theme.sizes.xxLarge};
`;

export const Label = styled.Text`
  font-size: ${Theme.sizes.medium};
  color: ${Theme.colors.textLight};
  line-height: ${Theme.sizes.large};
`;
