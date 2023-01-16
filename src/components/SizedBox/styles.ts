import styled from 'styled-components/native';

import SizedGapProps from 'components/SizedBox/types';
import { Theme } from 'shared/styles';

export const Container = styled.View<SizedGapProps>`
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : Theme.sizes[height || 'zero']};
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : Theme.sizes[width || 'zero']};
`;
