import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import {
  mockedSignInWithEmailAndPassword,
  mockedNavigationNavigate,
} from 'jestSetup';
import { SigninScreen } from 'screens';

describe('SigninScreen Component', () => {
  let mockedSignInWithEmailAndPasswordLocal = mockedSignInWithEmailAndPassword;

  beforeEach(() => {
    mockedNavigationNavigate.mockClear();
    mockedSignInWithEmailAndPasswordLocal.mockClear();
  });

  const checkInvalidForm = async (data: any): Promise<void> => {
    // Arrange
    const { queryByPlaceholderText } = render(<SigninScreen />);

    const input1 = queryByPlaceholderText(/email/i);
    const input2 = queryByPlaceholderText(/password/i);

    // Act
    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent.changeText(input2, data.password);
    });

    await waitFor(() => {
      fireEvent(input2, 'submitEditing');
    });

    // Assert
    expect(mockedSignInWithEmailAndPassword).not.toHaveBeenCalled();
  };

  it('should render a SigninScreen.', async () => {
    // Arrange
    const { queryByText, queryByPlaceholderText, queryByTestId } = render(
      <SigninScreen />,
    );

    const title = queryByText(/hello again!/i);
    const input1 = queryByPlaceholderText(/email/i);
    const input2 = queryByPlaceholderText(/password/i);
    const submitButton = queryByTestId('button-login');

    // Assert
    expect(title).toBeTruthy();
    expect(input1).toBeTruthy();
    expect(input2).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  it('should login with email.', async () => {
    // Arrange
    const data = {
      email: 'valid_email@email.com',
      password: 'validPassword!',
    };

    const { queryByPlaceholderText } = render(<SigninScreen />);

    const input1 = queryByPlaceholderText(/email/i);
    const input2 = queryByPlaceholderText(/password/i);

    // Act
    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent(input1, 'submitEditing');
    });

    await waitFor(() => {
      fireEvent.changeText(input2, data.password);
    });

    await waitFor(() => {
      fireEvent(input2, 'submitEditing');
    });

    // Assert
    expect(mockedSignInWithEmailAndPassword).toHaveBeenCalledWith({
      email: data.email,
      password: data.password,
    });
  });

  it('should not login when invalid e-mail.', async () => {
    // Arrange
    const data = {
      email: 'invalid_email@email.',
      password: 'validPassword!',
    };

    await checkInvalidForm({ email: data.email, password: data.password });
  });

  it('should not login when email is empty.', async () => {
    // Arrange
    const data = {
      email: '',
      password: 'validPassword!',
    };

    await checkInvalidForm({ email: data.email, password: data.password });
  });

  it('should not login when password is empty.', async () => {
    // Arrange
    const data = {
      email: 'valid_email@email.com',
      password: '',
    };

    await checkInvalidForm({ email: data.email, password: data.password });
  });

  it('should not login when password is invalid.', async () => {
    // Arrange
    const data = {
      email: 'valid_email@email.com',
      password: '123',
    };

    await checkInvalidForm({ email: data.email, password: data.password });
  });

  it('should not login when form is invalid.', async () => {
    // Arrange
    const data = {
      email: 'invalid_email@email.',
      password: '123',
    };

    // Arrange
    const { queryByPlaceholderText } = render(<SigninScreen />);

    const input1 = queryByPlaceholderText(/email/i);
    const input2 = queryByPlaceholderText(/password/i);

    // Act
    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent.changeText(input2, data.password);
    });

    await waitFor(() => {
      fireEvent(input2, 'submitEditing');
    });

    // Assert
    expect(mockedSignInWithEmailAndPassword).not.toHaveBeenCalled();
  });

  it('should not login with invalid email credentials.', async () => {
    // Arrange
    mockedSignInWithEmailAndPasswordLocal =
      mockedSignInWithEmailAndPassword.mockImplementation(() => {
        throw new Error('invalid');
      });

    const data = {
      email: 'valid_email@email.com',
      password: 'validPassword123!',
    };

    const { queryByPlaceholderText, queryByTestId } = render(<SigninScreen />);

    const input1 = queryByPlaceholderText(/email/i);
    const input2 = queryByPlaceholderText(/password/i);
    const submitButton = queryByTestId('button-login');

    // Act
    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent.changeText(input1, data.email);
    });

    await waitFor(() => {
      fireEvent.changeText(input2, data.password);
    });

    await waitFor(() => {
      fireEvent.press(submitButton);
    });

    // Assert
    expect(mockedSignInWithEmailAndPasswordLocal).toHaveBeenCalledWith({
      email: data.email,
      password: data.password,
    });

    expect(mockedSignInWithEmailAndPasswordLocal).toThrow('invalid');
  });
});
