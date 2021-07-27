import React from 'react';
import { BackButton } from '..';
import { render, fireEvent } from '@testing-library/react-native';

let page = 'Bali, Indonesia';

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
describe('BackButton', () => {

  beforeEach(() => {
    jest.clearAllMocks();
    page = 'Bali, Indonesia'
  });
  test('render', () => {
    const tree = render(<BackButton page={page}/>);
    expect(tree).toMatchSnapshot()
  });
  test('onPress navigate', async () => {
    const { findByTestId } = render(<BackButton page={page}/>);
    const button = await findByTestId('go back')
    expect(mockedNavigate).not.toBeCalled();
    fireEvent(button, 'press');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
  test('onPress go back', async () => {
    const { findByTestId } = render(<BackButton />);
    const button = await findByTestId('go back')
    expect(mockedNavigate).not.toBeCalled();
    fireEvent(button, 'press');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
