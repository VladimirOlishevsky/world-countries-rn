import React from "react";
import { render } from '@testing-library/react-native';
import { ContinentCountries } from "..";
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

const mockFetchRegion = jest.fn();
const mockStore = {
  continentsStore: {
    fetchRegions: mockFetchRegion,
    countries: [
      {
        Name: 'South',
        FlagPng: 'south flag',
        Alpha2Code: 'so'
      },
      {
        Name: 'North',
        FlagPng: 'north flag',
        Alpha2Code: 'no'
      }
    ]
  },

};

jest.mock('store/index', () => ({
  getRootStore: () => mockStore,
}));


describe('ContinentCountries', () => {
  it('render component ContinentCountries', async () => {
    const route = {
      params: {
        name: 'Some country'
      }
    }
    const component = await render(<ContinentCountries route={route} />);
    expect(component).toMatchSnapshot();
  });
  //   it('component ContinentCards action fetchRegions', async () => {

  //     const { getByTestId } = render(<ContinentCards />);

  //     const page = getByTestId('Europe').props as {
  //       onClick: () => void
  //     };;

  //     expect(mockFetchProfileType).not.toBeCalled();
  //     page.onClick()
  //     expect(mockFetchProfileType).toBeCalledTimes(1);
  //   });
});