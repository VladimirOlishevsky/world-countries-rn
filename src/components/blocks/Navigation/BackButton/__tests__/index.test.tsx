import React from 'react';
import { BackButton } from '..';
import { render } from '@testing-library/react-native';

describe('BackButton', () => {
  it('BackButton render', () => {
    const country = render(<BackButton />);
    expect(country).toMatchSnapshot()
  });
});
