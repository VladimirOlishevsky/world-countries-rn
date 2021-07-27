import React from 'react';
import { CountryComponent } from '..';
import renderer from 'react-test-renderer';

const mockStore = {
  countryStore: {
    name: 'England',
    capital: 'London',
    region: 'Britain',
    subregion: 'North',
    population: 1200,
    latlng: [1, 2],
    currencies: [
      { name: '1', symbol: '2' }
    ],
    languages: [{ name: '1', nativeName: '2' }],
    flag: 'flag',
    alpha2Code: '222',
    topLevelDomain: ['en'],
    callingCodes: ['22'],
    store2Obj: {
        Capital: 'London',
        Region: 'Britain',
        Subregion: 'North',
        Population: 1200,
        Currencies: [
          { name: '1', symbol: '2' }
        ],
        Languages: [{ name: '1', nativeName: '2' }],
        Domain: 'en',
        PhoneCode: '22'
      }
  }
};

jest.mock('store/index', () => ({
  getRootStore: () => mockStore,
}));

const route = {
  params: {
    name: 'England',
    navigate: 'regional'
  }
}

describe('CountryComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockStore.countryStore.name = 'England';
    mockStore.countryStore.alpha2Code = '222';
    route.params.navigate = 'regional'
  })

  test('render', () => {
    const tree = renderer.create(<CountryComponent route={route}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
  test('countryStore.name empty ', () => {
    mockStore.countryStore.name = '';
    const tree = renderer.create(<CountryComponent route={route}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
  test('countryStore.alpha2Code empty', () => {
    mockStore.countryStore.alpha2Code = '';
    const tree = renderer.create(<CountryComponent route={route}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
  test('route.params.navigate empty ', () => {
    route.params.navigate = '';
    const tree = renderer.create(<CountryComponent route={route}/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
