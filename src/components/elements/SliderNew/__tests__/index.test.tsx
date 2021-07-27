import React from 'react';
import { SliderNew } from '..';
import { render } from '@testing-library/react-native';

describe('SliderNew', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('render', () => {
    const tree = render(<SliderNew />);
    expect(tree).toMatchSnapshot()
  });
});
