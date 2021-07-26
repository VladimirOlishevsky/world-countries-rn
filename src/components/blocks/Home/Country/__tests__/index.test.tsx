import React from 'react';
import { CountryComponent } from '..';
import renderer from 'react-test-renderer';
import { BackButton } from 'components/blocks/Navigation/BackButton';
import { Button } from 'react-native-paper';
import { Country, ICountryStore2Obj } from 'store/Country';
import { debug } from 'react-native-reanimated';
// import { Button } from 'native-base';


const mockFetchCountryByCode = jest.fn();
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
    callingCodes: ['22']
  },
  store2Obj: async() => {
    return {
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

export const mockData = {
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
  callingCodes: ['22']
}

// export const mockStore2Obj = {
//   Capital: 'London',
//   Region: 'Britain',
//   Subregion: 'North',
//   Population: 1200,
//   Currencies: [{ name: '1', symbol: '2' }],
//   Languages: [{ name: '1', nativeName: '2' }],
//   Domain: 'en',
//   PhoneCode: '22',
// }
// const store2Obj = {
//   Region: 'europe',
//   Subregion: 'south',
//   Population: 100,
//   Currencies: {
//     name: 'aa',
//     symbol: '1'
//   },
//   Languages: {
//     name: 'engl',
//     nativeName: 'sap'
//   },
//   Domain: 'au',
//   PhoneCode: '007'
// }

jest.mock('store/index', () => ({
  getRootStore: () => mockStore,
}));

// const createTestProps = () => ({
//   navigation: {
//     navigate: jest.fn()
//   },
//   // ...props
// });

const route = {
  params: {
    name: 'England',
    navigate: 'regional'
  }
}

describe('CountryComponent', () => {
  it('CountryComponent component render', async () => {

    const country = renderer.create(<CountryComponent />).toJSON();
    // expect(country).toMatchSnapshot();
  });
  it('button click', async () => {
    const country = renderer.create(<CountryComponent route={route} />);
    const page = country.root.findByType(BackButton).props.page
    expect(page).toEqual('RegionalCountries');

  });
  it('countryStore name empty', async () => {

    // const mockCountryStore = new Country();
    // mockCountryStore.fromApi(mockData);
    // expect(mockCountryStore.store2Obj).toStrictEqual(mockStore2Obj);

    // const country = renderer.create(<CountryComponent />);
    // const inst = country.getInstance();
    // expect(inst?.instance.getKeys()).toMatchSnapshot();
    // expect(country).toMatchSnapshot();
    // jest.spyOn(mockStore, 'store2Obj', 'get').mockReturnValue(store2Obj)
    // const findAllByTestID = (country: renderer.ReactTestRenderer) => country.root.findAll(el => el.props.testID === '123');
    // console.log(findAllByTestID(country).length)
    // const navigate = 'regional';
    // let props: any;   
    // beforeEach(() => {
    //   props = createTestProps({});
    //   // wrapper = shallow(<LoadingScreen {...props} />);   // no compile-time error
    // });

    // const push = jest.fn();
    // const country = renderer.create(<CountryComponent navigation={() => {}} route={{ key: '1', name: '3' }} />);

    // const aa = country.root.findByType(Button).props as {
    //   onClick: () => void
    // };

    // console.log(aa)

    // const page = country.root.findByType(BackButton).props.page

    // expect(page).toEqual('RegionalCountries');
  });
});
