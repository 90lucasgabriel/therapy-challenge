import React from 'react';
import { render } from '@testing-library/react-native';

import { Alert } from 'components';

describe('Alert Component', () => {
  it('should render a Alert.', () => {
    // Arrange
    const { getByText } = render(<Alert>error label</Alert>);

    // Act
    const element = getByText('error label');

    // Assert
    expect(element).toBeTruthy();
  });
});
