import { Theme } from 'shared/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: ${Theme.sizes.medium};
  border-radius: ${Theme.sizes.smallest};
  align-items: center;
  justify-content: center;

  background: ${props =>
    props.disabled ? Theme.colors.disabled : Theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${Theme.colors.white};
`;
