import { TextInputMaskTypeProp } from 'react-native-masked-text';

type CustomMaskTypeProps =
  | 'email-cpf'
  | 'email-cnpj'
  | 'cpf-cnpj'
  | 'email-cpf-cnpj';

type MaskTypeProps = CustomMaskTypeProps | TextInputMaskTypeProp;

export type { MaskTypeProps, CustomMaskTypeProps };
