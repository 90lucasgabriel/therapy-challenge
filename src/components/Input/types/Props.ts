import React from 'react';
import { TextInputProps } from 'react-native';

import {
  AutoCapitalizeProps,
  KeyboardTypeProps,
  MaskTypeProps,
  AutoCompleteItemProps,
} from 'components/Input/types';

type LocalProps = {
  /**
   * Input name reference
   */
  name: string;

  /**
   * Top label
   */
  label?: string;

  /**
   * Placeholder when empty
   */
  placeholder?: string;

  /**
   * Start icon
   */
  prefixIcon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  /**
   * Start icon action
   */
  prefixIconAction?: (param: any) => any;

  /**
   * End icon
   */
  suffixIcon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  /**
   * End icon action
   */
  suffixIconAction?: (param: any) => any;

  /**
   * Is password
   */
  secureTextEntry?: boolean;

  /**
   * Is masked
   */
  mask?: MaskTypeProps;

  /**
   * Mask options
   */
  options?: any;

  /**
   * Raw value or masked value
   */
  includeRawValueInChangeText?: boolean;

  /**
   * On initial data
   */
  onInitialData?: any;

  /**
   * Styles
   */
  containerStyle?: any;

  /**
   * Is editable
   */
  editable?: boolean;

  /**
   * Value
   */
  value?: string | number;

  /**
   * Autocomplete search
   */
  isAutoComplete?: boolean;

  /**
   * Autocomplete (Android)
   */
  autoComplete?: string;

  /**
   * Autocomplete (iOS)
   */
  textContentType?: string;

  /**
   * Auto correct
   */
  autoCorrect?: boolean;

  /**
   * Show success icon
   */
  showSuccessIcon?: boolean;

  /**
   * Show error icon
   */
  showErrorIcon?: boolean;

  /**
   * Keyboard types
   */
  keyboardType?: KeyboardTypeProps;

  /**
   * Auto capitalize
   */
  autoCapitalize?: AutoCapitalizeProps;

  /**
   * Force capitalize based on autoCapitalize value
   */
  forceAutoCapitalize?: boolean;

  /**
   * Yup Validator
   */
  validator?: any;

  /**
   * Error message
   */
  errorMessage?: string;

  /**
   * Callback
   */
  callback?(value: string): void;

  /**
   * AutoComplete options
   */
  autoCompleteOptions?: AutoCompleteItemProps[];

  /**
   * Label when autocomplete option is selected
   */
  valueLabel?: string;

  /**
   * Is AutoComplete loading
   */
  isAutoCompleteLoading?: boolean;

  /**
   * Force external error message
   */
  customError?: string;
};

type Props = LocalProps & TextInputProps;

export default Props;
