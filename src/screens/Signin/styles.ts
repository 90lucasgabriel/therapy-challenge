import styled from 'styled-components/native';
import { Form as UnformForm } from '@unform/mobile';
import { Theme } from 'shared/styles';

export const TitleContainer = styled.View`
  padding: ${Theme.sizes.large} 0;
`;

export const Form = styled(UnformForm)``;

export const LottieContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 160px;
`;

export const RegisterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
