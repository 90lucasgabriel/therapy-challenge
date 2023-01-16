import React from 'react';
import { Image } from 'react-native';

import Props from './types';
import { Title, Label } from 'components';
import {
  Container,
  ThumbnailContainer,
  ContentContainer,
  Thumbnail,
} from './styles';

const Content = ({ title, label, thumbnail }: Props) => {
  return (
    <Container>
      <ThumbnailContainer>
        <Thumbnail source={{ uri: thumbnail }} resizeMode="cover" />
      </ThumbnailContainer>
      <ContentContainer>
        <Title numberOfLines={2}>{title}</Title>
        <Label numberOfLines={4}>{label}</Label>
      </ContentContainer>
    </Container>
  );
};

export default Content;
