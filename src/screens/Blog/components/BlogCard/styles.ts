import { Theme } from 'shared/styles';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${Theme.colors.white};
  border: 1px solid ${Theme.colors.borderInput};
`;

export const ThumbnailContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 180px;
  background: ${Theme.colors.borderInput};
`;

export const Thumbnail = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ContentContainer = styled.View`
  padding: ${Theme.sizes.medium};
`;
