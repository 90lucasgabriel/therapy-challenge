import { TextInput as DefaultTextInput } from 'react-native';

type TextInputProps = {
  label?: string;
};

type InputProps = typeof DefaultTextInput & TextInputProps;

export default InputProps;
