import styled from 'styled-components/native';
import { Form as UnformForm } from '@unform/mobile';
import { Theme } from 'shared/styles';

export const TitleContainer = styled.View`
  padding: ${Theme.sizes.large} 0;
`;
export const Title = styled.Text`
  font-size: ${Theme.sizes.large};
  color: ${Theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${Theme.sizes.medium};
  color: ${Theme.colors.textLight};
`;

export const Form = styled(UnformForm)``;

export const LottieContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 190px;
`;

export const RegisterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  color: ${Theme.colors.textLight};
`;
