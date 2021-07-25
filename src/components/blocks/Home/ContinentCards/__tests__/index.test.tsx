import React from "react";
import { render } from '@testing-library/react-native';
import { ContinentCards } from "..";
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

const mockFetchRegion = jest.fn();
const mockStore = {
  continentsStore: {
    fetchRegions: mockFetchRegion,
  },
};

jest.mock('store/index', () => ({
  getRootStore: () => mockStore,
}));


describe('ContinentCards', () => {
  it('render component ContinentCards', () => {
    const tree = render(<ContinentCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('component ContinentCards action fetchRegions', async () => {

    const { getByTestId } = render(<ContinentCards />);

    const page = getByTestId('Europe').props as {
      onClick: () => void
    };;

    expect(mockFetchRegion).not.toBeCalled();
    page.onClick()
    expect(mockFetchRegion).toBeCalledTimes(1);
  });
});