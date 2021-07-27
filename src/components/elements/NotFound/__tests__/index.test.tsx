import React from 'react';
import { NotFound } from '..';
import { render, fireEvent } from '@testing-library/react-native';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigate
    }),
  };
});
describe('NotFound', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('render', () => {
    const tree = render(<NotFound />);
    expect(tree).toMatchSnapshot()
  });
  test('onPress navigate', async () => {
    const { findByText } = render(<NotFound />);
    const button = await findByText('go to search')
    expect(mockedNavigate).not.toBeCalled();
    fireEvent(button, 'press');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
