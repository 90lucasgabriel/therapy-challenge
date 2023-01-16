import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { animated } from '@react-spring/native';

import { Theme } from 'shared/styles';
import { TextInputMask } from 'react-native-masked-text';
import {
  InputProps,
  InputContainerProps,
  AutoCompleteValueLabelProps,
  AutoCompleteInputContainerProps,
  AutoCompleteItemContainerProps,
} from 'components/Input/types';

export const Container = styled.View``;

export const InputContainer = styled.View`
  position: relative;
`;

export const InputContentContainer = styled.View<AutoCompleteInputContainerProps>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 6px;
  border-width: ${Theme.sizes.min};
  border-color: ${Theme.colors.borderInput};
  padding: 0 ${Theme.sizes.medium};
  background: ${Theme.colors.white};

  ${props =>
    props?.showAutoComplete &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `}
`;

export const LabelContainer = styled(animated.View)`
  z-index: 10;
`;

export const ViewScrollView = styled.ScrollView`
  extraHeight: 0,
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    paddingBottom: 6,
  },
`;

export const Label = styled(animated.Text)`
  position: absolute;
  padding: 0 ${Theme.sizes.smallest};
  line-height: 21px;
`;

export const TextInput = styled.TextInput<InputProps>`
  flex: 1;
  font-size: 14px;
  max-height: 56px;
  padding-top: 18px;
  line-height: 18px;
  margin: ${Theme.sizes.zero} ${Theme.sizes.smallest};
  color: ${Theme.colors.text};
  ${props =>
    !props.editable &&
    css`
      color: ${Theme.colors.textLight};
    `}
  ${props =>
    props.isSelected &&
    css`
      color: ${Theme.colors.transparent};
    `};
`;

export const TextInputMasked = styled(TextInputMask)`
  flex: 1;
  font-size: 14px;
  color: ${props =>
    !props.editable ? Theme.colors.textLight : Theme.colors.text};
  max-height: 56px;
  padding-top: 18px;
  line-height: 18px;
  margin: ${Theme.sizes.zero} ${Theme.sizes.smallest};
`;
export const PasswordIconButton = styled.TouchableOpacity`
  padding: ${Theme.sizes.small};
  padding-right: ${Theme.sizes.zero};
`;

export const InputBottomBorder = styled.View<InputContainerProps>`
  position: absolute;
  bottom: 0;
  left: 5px;
  right: 5px;
  height: ${Theme.sizes.min};

  ${props =>
    props.isFocused &&
    css`
      background-color: ${Theme.colors.secondaryLight};
    `}
  ${props =>
    props.isErrored &&
    css`
      background-color: ${Theme.colors.error};
    `}
  ${props =>
    props.isSuccess &&
    props.isPristine &&
    css`
      background-color: ${Theme.colors.success};
    `};
  ${props =>
    props.editable === false &&
    css`
      background-color: ${Theme.colors.borderInput};
    `};
`;

export const ErrorContainer = styled.View`
  padding-top: ${Theme.sizes.small};
`;

export const ErrorMessage = styled.Text`
  color: ${Theme.colors.error};
  font-size: 14px;
`;

export const AutocompleteContainer = styled.View`
  max-height: 150px;
  width: 100%;
  position: relative;
  border: 1px solid ${Theme.colors.borderInput};
  border-top-left-radius: ${Theme.sizes.zero};
  border-top-right-radius: ${Theme.sizes.zero};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-color: ${Theme.colors.secondaryLight};
  padding-right: ${Theme.sizes.small};
  top: -1px;
  background: ${Theme.colors.white};
  overflow: hidden;
`;

export const AutocompleteList = styled(FlatList as new () => FlatList<any>)`
  width: 100%;
  z-index: 30;
`;

export const AutocompleteItemContainer = styled.TouchableOpacity<AutoCompleteItemContainerProps>`
  z-index: 30;
  background: ${Theme.colors.white};
  padding: ${Theme.sizes.medium};
  ${props =>
    props.isSelected &&
    css`
      background: ${Theme.colors.borderInput};
      padding-left: ${Theme.sizes.large};
    `};
`;

export const AutocompleteLabel = styled.Text<AutoCompleteItemContainerProps>`
  font-size: 14px;
  line-height: 17px;
  color: ${Theme.colors.text};
  ${props =>
    props.isSelected &&
    css`
      color: ${Theme.colors.secondaryLight};
    `};
`;

export const ValueLabelContainer = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  z-index: 30;
  width: 100%;
  padding-left: 16px;
`;

export const ValueLabel = styled.Text<AutoCompleteValueLabelProps>`
  font-size: 14px;
  color: ${props =>
    !props.editable ? Theme.colors.textLight : Theme.colors.text};
  max-height: 56px;
  padding-top: 18px;
  line-height: 18px;
  margin: ${Theme.sizes.zero} ${Theme.sizes.smallest};
`;
