import React from "react";
import { Maps } from "..";
import renderer from 'react-test-renderer';

const mockStore = {
  countryStore: {
    latlng: [0, 1]
  }
}

jest.mock('store/index', () => ({
  getRootStore: () => mockStore,
}));


jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = () => {
    return <View></View>;
  };
  const MockMarker = () => {
    return <View></View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

describe('Maps', () => {
  test('render', () => {
    const tree = renderer.create(<Maps />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});