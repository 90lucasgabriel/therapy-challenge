import styled from 'styled-components/native';

import { Props } from 'components/Alert/types';
import { Theme } from 'shared/styles';

export const Container = styled.View<Props>`
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  border-radius: ${Theme.sizes.small};
  border: 1px solid ${Theme.colors.error};
  background: ${Theme.colors.errorBackground};
  padding: ${Theme.sizes.small};
`;

export const LabelContainer = styled.View``;

export const Label = styled.Text`
  color: ${Theme.colors.error};
`;
