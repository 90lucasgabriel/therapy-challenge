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
  font-size: ${Theme.sizes.medium};

  color: ${props =>
    props.disabled ? Theme.colors.disabledText : Theme.colors.white};
`;
