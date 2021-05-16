import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import { BackButton } from 'Navigation/BackButton';
import React from 'react';
import { create } from 'react-test-renderer';
import { Country } from '..';

// jest.mock('@react-navigation/native');

const mockGoBack = jest.fn();

React.useEffect = jest.fn();

describe("App", () => {

  it('children IconButton property`s "onClick" should call "goBack" method', () => {
    const component = create(<BackButton page="Some title" />);
    const props = component.root.findByType(BackButton).props as { onClick: () => void };

    expect(mockGoBack).not.toBeCalled();
    props.onClick();
    expect(mockGoBack).toBeCalled();
  });
  it('Country test', () => {

    const mockedParams = {
      route: {
        params: { currentBid: 'whatever-id', name: 'Lebanon' },
      },
      navigation: ''
    };

    const back = create(<BackButton page="Some title" />)
    const tree = create(
      <Country {...mockedParams}>
        {back}
      </Country>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})