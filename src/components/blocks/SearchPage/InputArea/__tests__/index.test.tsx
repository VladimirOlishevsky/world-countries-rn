import React from 'react';
import { InputArea } from '..';
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

jest.mock('react-native-textinput-effects');
// jest.mock('react-native-vector-icons/FontAwesome', () => ({ Icon: '' }));

describe('InputArea', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('render', () => {
    const tree = render(<InputArea />);
    expect(tree).toMatchSnapshot()
  });
  // test('onPress navigate', async () => {
  //   const { findByTestId } = render(<BackButton page={page}/>);
  //   const button = await findByTestId('go back')
  //   expect(mockedNavigate).not.toBeCalled();
  //   fireEvent(button, 'press');
  //   expect(mockedNavigate).toHaveBeenCalledTimes(1);
  // });
  // test('onPress go back', async () => {
  //   const { findByTestId } = render(<BackButton />);
  //   const button = await findByTestId('go back')
  //   expect(mockedNavigate).not.toBeCalled();
  //   fireEvent(button, 'press');
  //   expect(mockedNavigate).toHaveBeenCalledTimes(1);
  // });
});
