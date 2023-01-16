import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Theme } from 'shared/styles';
import Props from './types';

import { Label, SizedBox } from 'components';
import { Container, LabelContainer } from './styles';

const ListTileItem = ({ icon, label, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Feather name={icon} size={20} color={Theme.colors.textLight} />
      <SizedBox width="medium" />

      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>

      {onPress && (
        <>
          <SizedBox width="medium" />
          <Feather
            name="chevron-right"
            size={20}
            color={Theme.colors.textLight}
          />
        </>
      )}
    </Container>
  );
};

export default ListTileItem;
