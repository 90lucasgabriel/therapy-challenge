import styled from 'styled-components/native';

import { Theme } from 'shared/styles';
import { AdaptiveContainer } from 'components';

export const CustomAdaptiveContainer = styled(AdaptiveContainer)`
  padding: 0;
`;

export const Container = styled.View`
  flex: 1;
`;

export const TitleContainer = styled.View`
  padding: ${Theme.sizes.large} 0;
  align-items: center;
  justify-content: center;
`;

export const LottieContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 140px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.textLight};
`;
