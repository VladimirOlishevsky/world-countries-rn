import React from "react";
import { render } from '@testing-library/react-native';
import { ContinentCountries } from "..";
import { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks();

const mockFetchCountryByCode = jest.fn();
const mockStore = {
  countryStore: {
    fetchCountryByCode: mockFetchCountryByCode,
  },
  continentsStore: {
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

const mockRoute = {
  params: {
    name: 'Some country'
  }
}

describe('ContinentCountries', () => {
  it('render page ContinentCountries', async () => {

    const page = render(<ContinentCountries route={mockRoute} />);
    expect(page).toMatchSnapshot();

  });
  it('press onclick ContinentCountries', async () => {
    const { getAllByTestId } = render(<ContinentCountries route={mockRoute} />);

    const component = getAllByTestId('continent-countries 1')[0].props as {
      onClick: () => void
    };

    expect(mockFetchCountryByCode).not.toBeCalled();
    component.onClick()
    expect(mockFetchCountryByCode).toBeCalledTimes(1);
  })
});