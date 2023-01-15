import styled from 'styled-components/native';
import { Theme } from 'shared/styles';

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  padding: ${Theme.sizes.large} 0;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${Theme.sizes.large};
  color: ${Theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${Theme.sizes.medium};
  color: ${Theme.colors.textLight};
`;

export const LottieContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 140px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.textLight};
`;
