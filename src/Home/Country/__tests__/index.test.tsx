import React from 'react';
import { Country } from '..';
import renderer from 'react-test-renderer';
import { BackButton } from 'Navigation/BackButton';
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

describe('Country', () => {
  it('Country component render', () => {
    const push = jest.fn();
    const country = renderer.create(<Country navigation={{ push }} />).toJSON();
    // const country = render(<Country navigation={{ push }} />);
    expect(country).toMatchSnapshot();
  });
  it('button click', async () => {
    const navigate = 'regional';

    const country = renderer.create(<Country navigation={{ navigate }} />);
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
