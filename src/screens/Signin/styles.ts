import styled from 'styled-components/native';
import { Form as UnformForm } from '@unform/mobile';
import { Theme } from 'shared/styles';

export const AdaptiveContainer = styled.View.attrs(
  ({ paddingBottom }: any) => ({
    extraHeight: 140,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      paddingBottom: paddingBottom ?? 16,
    },
  }),
)``;

export const Container = styled.View`
  flex: 1;
  padding: 0 ${Theme.sizes.large};
`;

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

export const RegisterContainer = styled.View`
  flex-direction: row;
`;

export const Label = styled.Text`
  color: ${Theme.colors.textLight};
`;
