import React from "react";
import { Button } from 'react-native-paper';
import { ButtonGoToMap } from "..";
import renderer from 'react-test-renderer';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('ButtonGoToMap', () => {
  test('render', () => {
    const tree = renderer.create(<ButtonGoToMap countryName='England' />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  test('button "Go To Map" click ', async () => {
    const tree = renderer.create(<ButtonGoToMap countryName='England' />)
    const buttonBaseProps = tree.root.findByType(Button).props as {
      onPress: () => void
    };
    expect(mockedNavigate).not.toBeCalled();
    buttonBaseProps.onPress()
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
})