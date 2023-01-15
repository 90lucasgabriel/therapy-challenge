import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  useMemo,
  Ref,
} from 'react';
import { useField } from '@unform/core';
import { useSpring } from '@react-spring/native';
import { TextInputMaskTypeProp } from 'react-native-masked-text';
import { Feather } from '@expo/vector-icons';

import { ForceAutoCapitalize } from './helpers';
import { Props, RefProps, ValueRefProps } from 'components/Input/types';
import { Theme } from 'shared/styles';
import {
  Container,
  InputContainer,
  LabelContainer,
  InputContentContainer,
  Label,
  TextInputMasked,
  TextInput,
  PasswordIconButton,
  InputBottomBorder,
  ErrorContainer,
  ErrorMessage,
  AutocompleteContainer,
  AutocompleteList,
  AutocompleteItemContainer,
  AutocompleteLabel,
  ValueLabelContainer,
  ValueLabel,
} from './styles';

const Input: React.ForwardRefRenderFunction<RefProps, Props> = (
  {
    name,
    label,
    placeholder,
    prefixIcon,
    prefixIconAction,
    suffixIcon,
    suffixIconAction,
    secureTextEntry,
    mask,
    includeRawValueInChangeText = true,
    onInitialData,
    editable = true,
    onChangeText,
    onFocus,
    onBlur,
    value,
    autoComplete,
    textContentType,
    autoCorrect,
    keyboardType,
    showSuccessIcon = true,
    showErrorIcon = true,
    autoCapitalize = 'sentences',
    forceAutoCapitalize,
    options,
    validator,
    isAutoComplete = false,
    callback,
    autoCompleteOptions,
    valueLabel,
    customError,
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<Ref>(null);

  const {
    registerField,
    defaultValue = '',
    fieldName,
    error,
    clearError,
  } = useField(name);
  const inputValueRef = useRef<ValueRefProps>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isPristine, setIsPristine] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false);
  const [customErrorMessage, setCustomErrorMessage] = useState('');
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);
  const [isClearing, setIsClearing] = useState(false);

  const [text, setText] = useState('');
  const [rawText, setRawText] = useState('');
  const customMask = useMemo((): TextInputMaskTypeProp => {
    if (mask === 'email-cpf') {
      return 'custom';
    }

    return mask as TextInputMaskTypeProp;
  }, [mask]);

  const customOptions = useMemo(() => {
    if (mask === 'email-cpf') {
      return {
        mask: /^[\d.-]{1,11}$/.test(rawText)
          ? `BBB.BBB.BBB-BB${'*'.repeat(241)}`
          : '*'.repeat(255),
        translation: {
          B(val) {
            if (val === '.' || val === '-') {
              return '';
            }
            return val;
          },
        },
      };
    }

    return options;
  }, [mask, options, rawText]);

  const customOnChangeText = useCallback(
    (currentValue: string): string => {
      let parsedValue = currentValue;
      if (mask === 'email-cpf') {
        if (
          /^[\d.-]{1,11}$/.test(currentValue) ||
          /^[\d.-]*[^\d.-][\d.-]*$/.test(currentValue) ||
          (/^[\d.-]{1,255}$/.test(currentValue) && currentValue.length > 11)
        ) {
          parsedValue = currentValue.replace(/[.-]/g, '');
        }
      }
      return parsedValue;
    },
    [mask],
  );

  // Animations
  const transitionStart = useMemo(() => {
    return {
      top: 18,
      left: 16,
      fontSize: 14,
      fontWeight: 'normal',
      color: Theme.colors.placeholder,
    };
  }, []);

  const transitionEnd = useMemo(() => {
    return {
      top: 8,
      left: 16,
      fontSize: 10,
      fontWeight: 'bold',
      color: Theme.colors.selectedPlaceholder,
    };
  }, []);

  const transition = useSpring(() => {
    if (isFocused || isFilled) {
      return {
        from: transitionStart,
        to: transitionEnd,
      };
    }

    return {
      from: transitionEnd,
      to: transitionStart,
    };
  }, [isFocused, isFilled, error]);

  const checkLabel = useMemo(() => {
    if (isFocused || isFilled) {
      if (label) {
        return label;
      }
    }

    return placeholder;
  }, [isFocused, isFilled, label, placeholder]);

  // Actions
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    setIsAutoCompleteOpen(false);

    if (isAutoComplete && isSelected) {
      setIsAutoCompleteOpen(false);
      inputValueRef.current.value = '';
      inputElementRef.current.setNativeProps({
        text: '',
      });
      setText('');
      setRawText('');
      if (callback) {
        callback('');
      }
    }

    setIsSelected(false);

    if (onFocus) {
      onFocus();
    }
  }, [callback, isAutoComplete, isSelected, onFocus]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsPristine(true);
    setIsFilled(!!inputValueRef.current.value || !!text);

    setIsAutoCompleteOpen(false);

    if (isAutoComplete && isSelected) {
      inputValueRef.current.value = value?.toString();
      inputElementRef.current.setNativeProps({
        text: value?.toString(),
      });
    }

    if (onBlur) {
      onBlur();
    }
  }, [text, isAutoComplete, isSelected, onBlur, value]);

  const handleSelectItem = useCallback(
    itemValue => {
      setIsSelected(true);
      if (callback) {
        callback(itemValue);
      }
      setIsAutoCompleteOpen(false);
      inputElementRef?.current?.blur();
    },
    [callback],
  );

  useImperativeHandle(ref, () => ({
    focus() {
      if (inputElementRef?.current?.props) {
        inputElementRef?.current?._inputElement?.focus(); //eslint-disable-line
        return;
      }

      inputElementRef?.current?.focus();
    },
    isValid() {
      return isSuccess;
    },
    clear() {
      setIsClearing(true);
      inputValueRef.current.value = '';
      try {
        inputElementRef?.current?._inputElement?.setNativeProps({ text: '' }); //eslint-disable-line
      } catch (e) {
        console.error(e); // eslint-disable-line
      }
      try {
        inputElementRef?.current?._inputElement?.clear(); //eslint-disable-line
      } catch (e) {
        console.error(e); // eslint-disable-line
      }
      setText('');
      setRawText('');

      setTimeout(() => {
        setIsFilled(false);
        setIsError(false);
        setIsSuccess(false);
        setIsPristine(false);
      }, 100);

      setTimeout(() => {
        setIsClearing(false);
      }, 200);
    },
  }));

  useEffect(() => {
    setIsFilled(!!value);

    if (onInitialData) onInitialData(defaultValue);
  }, [defaultValue, onInitialData, value]);

  useEffect(() => {
    if (error) {
      setIsPristine(true);
    }
  }, [error]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      getValue() {
        if (mask && includeRawValueInChangeText) {
          return rawText;
        }

        return text;
      },
      setValue(_, val) {
        inputValueRef.current.value = val;
        inputElementRef.current.setNativeProps({ text: val });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [
    fieldName,
    registerField,
    mask,
    rawText,
    text,
    includeRawValueInChangeText,
  ]);
  const commonProps = {
    ref: inputElementRef,
    defaultValue,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    secureTextEntry: isSecureTextEntry,
    editable,
    value: value ?? text,
    placeholder,
    placeholderTextColor: Theme.colors.transparent,
    selectionColor: Theme.colors.secondary,
    autoCapitalize,
    autoCorrect,
    autoComplete,
    textContentType,
    keyboardType,
    isSelected,
  };

  const checkValidator = useCallback(async () => {
    return validator.validate(text);
  }, [text, validator]);

  useEffect(() => {
    if (isClearing) {
      return;
    }

    if (validator) {
      checkValidator()
        .then(() => {
          setIsSuccess(true);
          setIsError(false);
          setCustomErrorMessage('');
          clearError();
        })
        .catch(err => {
          setIsSuccess(false);
          setIsError(true);
          setCustomErrorMessage(err?.message);
        });
    }
  }, [
    checkValidator,
    text,
    validator,
    isError,
    isSuccess,
    clearError,
    isClearing,
  ]);

  const showAutoComplete = useMemo(() => {
    return (
      isAutoComplete &&
      isAutoCompleteOpen &&
      autoCompleteOptions?.length > 0 &&
      text?.length >= 3
    );
  }, [isAutoComplete, isAutoCompleteOpen, autoCompleteOptions?.length, text]);

  return (
    <>
      <Container>
        <InputContainer>
          {label && (
            <LabelContainer pointerEvents="none">
              <Label maxFontSizeMultiplier={1} style={transition}>
                {checkLabel}
              </Label>
            </LabelContainer>
          )}

          <InputContentContainer
            isFocused={isFocused}
            isErrored={!!error}
            showAutoComplete={showAutoComplete}
            editable={editable}>
            {isAutoComplete && !isFocused && (
              <ValueLabelContainer
                onPress={() => {
                  ref?.current?.focus();
                }}>
                <ValueLabel numberOfLines={1} editable={editable}>
                  {valueLabel}
                </ValueLabel>
              </ValueLabelContainer>
            )}

            {mask ? (
              <TextInputMasked
                type={customMask}
                options={customOptions}
                focusable
                includeRawValueInChangeText={includeRawValueInChangeText}
                onChangeText={(maskedTextValue, rawTextValue) => {
                  setIsAutoCompleteOpen(true);
                  setIsSelected(false);
                  setText(maskedTextValue);
                  setRawText(rawTextValue ?? maskedTextValue);

                  const currentValue = rawTextValue ?? maskedTextValue ?? '';
                  let parsedValue = currentValue;
                  if (onChangeText) {
                    parsedValue = customOnChangeText(currentValue);

                    setText(parsedValue);
                    setRawText(parsedValue);

                    onChangeText(parsedValue);
                  }
                }}
                {...commonProps}
                {...rest}
              />
            ) : (
              <TextInput
                onChangeText={async val => {
                  setIsAutoCompleteOpen(true);
                  setIsSelected(false);
                  let parsedVal = val;

                  if (forceAutoCapitalize) {
                    parsedVal = await ForceAutoCapitalize({
                      value: val,
                      autoCapitalize,
                    });
                  }

                  setText(parsedVal);
                  inputValueRef.current.value = parsedVal;

                  if (onChangeText) {
                    onChangeText(parsedVal ?? '');
                  }
                }}
                {...commonProps}
                {...rest}
              />
            )}

            {!secureTextEntry &&
              !suffixIcon &&
              isPristine &&
              showSuccessIcon &&
              isSuccess &&
              !(
                !!error ||
                (isPristine && (!!customErrorMessage || !!customError))
              ) && (
                <Feather
                  name="check-circle"
                  size={19}
                  color={Theme.colors.success}
                />
              )}

            {!secureTextEntry &&
              !suffixIcon &&
              showErrorIcon &&
              (!!error ||
                (isPristine && (!!customErrorMessage || !!customError))) && (
                <Feather
                  name="alert-circle"
                  size={19}
                  color={Theme.colors.error}
                />
              )}

            {secureTextEntry && (
              <PasswordIconButton
                onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
                {isSecureTextEntry ? (
                  <Feather name="eye" size={19} color={Theme.colors.text} />
                ) : (
                  <Feather name="eye-off" size={19} color={Theme.colors.text} />
                )}
              </PasswordIconButton>
            )}
          </InputContentContainer>
          <InputBottomBorder
            isFocused={isFocused}
            isErrored={
              !!error ||
              !!customError ||
              (isPristine && (!!customErrorMessage || !!customError))
            }
            isSuccess={
              isSuccess && !error && !customErrorMessage && !customError
            }
            isPristine={isPristine}
            editable={editable}
          />
        </InputContainer>

        {showAutoComplete && (
          <AutocompleteContainer>
            <AutocompleteList
              keyboardDismissMode="interactive"
              keyboardShouldPersistTaps="handled"
              nestedScrollEnabled
              data={autoCompleteOptions}
              keyExtractor={item => item?.label}
              renderItem={({ item }) => (
                <AutocompleteItemContainer
                  onPress={() => handleSelectItem(item)}
                  isSelected={value?.value === item?.value}>
                  <AutocompleteLabel isSelected={value?.value === item?.value}>
                    {item?.label}
                  </AutocompleteLabel>
                </AutocompleteItemContainer>
              )}
            />
          </AutocompleteContainer>
        )}

        {(!!error ||
          (isPristine && (!!customErrorMessage || !!customError))) && (
          <ErrorContainer>
            <ErrorMessage>
              {customErrorMessage || customError || error}
            </ErrorMessage>
          </ErrorContainer>
        )}
      </Container>
    </>
  );
};

export default forwardRef(Input);
