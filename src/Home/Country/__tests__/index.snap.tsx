import React from 'react';
import { Country } from '..';
import { render } from '@testing-library/react-native';

describe('Screen 1', () => {
  it('Country component render', () => {
    const push = jest.fn();
    const country = render(<Country navigation={{ push }} />);
    expect(country).toBeTruthy()
  });
});
