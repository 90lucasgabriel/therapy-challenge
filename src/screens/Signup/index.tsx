import React, { useCallback, useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FormHandles } from '@unform/core';
import * as yup from 'yup';
import Lottie from 'lottie-react-native';

import schema from './helpers/validator';
import { emailValidator, passwordValidator } from 'shared/helpers/validators';
import { getValidationErrors, isValidForm } from 'shared/helpers';
import { isValidFormProps } from 'shared/helpers/isValidForm';

import { useAuth } from 'domains/Auth/hooks';
import {
  AdaptiveContainer,
  Alert,
  Button,
  ButtonLabel,
  Title,
  Label,
  Input,
  SizedBox,
} from 'components';
import {
  TitleContainer,
  Form,
  LottieContainer,
  SigninContainer,
} from './styles';

const SignupScreen = () => {
  const { createUserWithEmailAndPassword } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formRef = useRef<FormHandles>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const updateIsValid = useCallback(async (data: isValidFormProps) => {
    const response = await isValidForm(data);
    setIsValid(response);
  }, []);

  const handleSubmit = useCallback(
    async (data: any) => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        formRef.current?.setErrors({});

        await schema.validate(data, { abortEarly: false });

        await createUserWithEmailAndPassword({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          return;
        }

        setErrorMessage(error?.message);
      } finally {
        setIsLoading(false);
      }
    },
    [createUserWithEmailAndPassword],
  );

  return (
    <AdaptiveContainer>
      <LottieContainer>
        <Lottie
          source={require('assets/lottie/meditation-lady.json')}
          autoPlay
          loop
          style={{ height: 300 }}
        />
      </LottieContainer>

      <TitleContainer>
        <Title>Create an account</Title>
        <Label>Enter the fields below to get started.</Label>
      </TitleContainer>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          ref={emailRef}
          name="email"
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          autoComplete="email"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          validator={emailValidator}
          returnKeyType="next"
          editable={!isLoading}
          onSubmitEditing={() => passwordRef.current?.focus()}
          onChangeText={value => {
            updateIsValid({
              name: 'email',
              value,
              validator: emailValidator,
              fieldsObjectList: isValid,
            });
          }}
        />

        <SizedBox height="medium" />

        <Input
          ref={passwordRef}
          name="password"
          label="Senha"
          placeholder="Senha"
          autoComplete="password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          validator={passwordValidator}
          editable={!isLoading}
          returnKeyType="send"
          onSubmitEditing={() => formRef.current?.submitForm()}
          onChangeText={value =>
            updateIsValid({
              name: 'password',
              value,
              validator: passwordValidator,
              fieldsObjectList: isValid,
            })
          }
        />

        <SizedBox height="large" />

        <Button
          id="create-account"
          title="Create Account"
          onPress={() => formRef.current?.submitForm()}
          isLoading={isLoading}
          disabled={isLoading || Object.values(isValid).some(value => !value)}
        />
        {!!errorMessage && (
          <>
            <SizedBox height="medium" />
            <Alert type="error">{errorMessage}</Alert>
          </>
        )}
      </Form>

      <SizedBox height="medium" />

      <SigninContainer>
        <Label>Already have an account?</Label>
        <ButtonLabel title=" Login" onPress={() => navigation.pop()} />
      </SigninContainer>
    </AdaptiveContainer>
  );
};

export default SignupScreen;
