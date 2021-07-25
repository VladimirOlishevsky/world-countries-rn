import React from 'react';
import { Country } from '..';
import renderer from 'react-test-renderer';
import { BackButton } from 'components/blocks/Navigation/BackButton';
import { Button } from 'react-native-paper';
// import { Button } from 'native-base';


const mockFetchCountryByCode = jest.fn();
const mockStore = {
  countryStore: {
    name: '',
    fetchCountryByCode: mockFetchCountryByCode,
  },
};

const createTestProps = () => ({
  navigation: {
    navigate: jest.fn()
  },
  // ...props
});

const route = {
  params: {
    name: 'England',
    navigate: 'regional'
  }
}

describe('Country', () => {
  it('Country component render', () => {
    const country = renderer.create(<Country />).toJSON();
    expect(country).toMatchSnapshot();
  });
  it('button click', async () => {
    const country = renderer.create(<Country route={route} />);
    const page = country.root.findByType(BackButton).props.page
    expect(page).toEqual('RegionalCountries');
    
  });
  it('countryStore name empty', async () => {
    // const navigate = 'regional';
    // let props: any;   
    // beforeEach(() => {
    //   props = createTestProps({});
    //   // wrapper = shallow(<LoadingScreen {...props} />);   // no compile-time error
    // });

    // const push = jest.fn();
    // const country = renderer.create(<Country navigation={() => {}} route={{ key: '1', name: '3' }} />);

    // const aa = country.root.findByType(Button).props as {
    //   onClick: () => void
    // };

    // console.log(aa)

    // const page = country.root.findByType(BackButton).props.page

    // expect(page).toEqual('RegionalCountries');
  });
});
