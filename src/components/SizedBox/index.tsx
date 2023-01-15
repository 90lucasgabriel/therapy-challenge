import React from 'react';
import SizedBoxProps from './types';

import { Container } from './styles';

const SizedBox: React.FC<SizedBoxProps> = ({
  height = 'zero',
  width = 'zero',
}) => <Container height={height} width={width} />;

export default SizedBox;
