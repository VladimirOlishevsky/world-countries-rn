import React from 'react';
import { Country } from '..';
import { render, fireEvent } from '@testing-library/react-native';
import { RegionalCountries } from '../../../SearchPage/RegionalCountries';

describe('Screen 1', () => {
  it('Country component render', () => {
    const push = jest.fn();
    const country = render(<Country navigation={{ push }} />);
    expect(country).toBeTruthy()
    // debug()
  });
  // it('navigates on button press', () => {

  //   const navigate = jest.fn();
  //   const mockedParams = {
  //     route: {
  //       params: { currentBid: 'whatever-id', name: 'Lebanon' },
  //     },
  //     // navigation: '',
  //     navigation: navigate
  //   };
  //   // const push = jest.fn();

  //   const { getByTestId  } = render(<Country navigation={{ navigate }} />);
  //   // debug()
  //   fireEvent.press(getByTestId ('backButton'));
  //   expect(navigate).toHaveBeenCalledWith('RegionalCountries');
  // });
});
