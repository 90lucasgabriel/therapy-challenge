import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { Theme } from 'shared/styles';
import { Button } from 'components';
import Props from './types';

const mockedOnPress = jest.fn().mockReturnValue('onPress');

describe('Button Component', () => {
  beforeEach(() => {
    mockedOnPress.mockClear();
  });

  it('should render title.', () => {
    // Arrange
    const data = {
      title: 'title',
    } as Props;

    const { queryByText } = render(<Button {...data} />);

    // Act
    const element = queryByText(/title/i);

    // Assert
    expect(element).toBeTruthy();
  });

  it('should grey color if it is disabled.', () => {
    // Arrange
    const data = {
      id: 'id',
      title: 'title',
      disabled: true,
    } as Props;

    const { queryByTestId } = render(<Button {...data} />);

    // Act
    const element = queryByTestId(`button-${data.id}`);

    // Assert
    expect(element?.props.style.backgroundColor).toEqual(Theme.colors.disabled);
  });

  it('should grey color if it is loading.', () => {
    // Arrange
    const data = {
      id: 'id',
      title: 'title',
      isLoading: true,
    } as Props;

    const { queryByTestId } = render(<Button {...data} />);

    // Act
    const element = queryByTestId(`button-${data.id}`);

    // Assert
    expect(element?.props.style.backgroundColor).toEqual(Theme.colors.disabled);
  });

  it('should action onPress when press icon.', async () => {
    // Arrange
    const data = {
      id: 'id',
      title: 'title',
      onPress: mockedOnPress,
    } as Props;

    const { queryByTestId } = render(<Button {...data} />);

    const element = queryByTestId(`button-${data.id}`);

    // Act
    await waitFor(() => {
      fireEvent.press(element);
    });

    // Assert
    expect(mockedOnPress).toBeCalled();
  });

  it('should not fire onPress when disabled.', async () => {
    // Arrange
    const data = {
      id: 'id',
      title: 'title',
      onPress: mockedOnPress,
      disabled: true,
    } as Props;

    const { queryByTestId } = render(<Button {...data} />);

    const element = queryByTestId(`button-${data.id}`);

    // Act
    await waitFor(() => {
      fireEvent.press(element);
    });

    // Assert
    expect(mockedOnPress).not.toHaveBeenCalled();
  });
});
