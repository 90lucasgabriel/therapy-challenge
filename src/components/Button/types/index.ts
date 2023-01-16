type ButtonProps = {
  id: string;
  disabled?: boolean;
  isLoading?: boolean;
  color?: string;
  title?: string;
  onPress?: () => void;
};

export default ButtonProps;
