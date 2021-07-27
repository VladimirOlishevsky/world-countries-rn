import React from 'react';
import { SlideItem } from '..';
import { render, fireEvent } from '@testing-library/react-native';


const mockedNavigate = jest.fn();
const mockedFetch = jest.fn();

const mockData = {
  item: {
    title: 'Bali, Indonesia',
    img: 'la la la',
    iso_2cc: '22',
  },
  index: 1,
}

const mockStore = {
  countryStore: {
    fetchCountryByCode: mockedFetch
  }
}

jest.mock('store/index', () => ({
  getRootStore: () => mockStore,
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
describe('SlideItem', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('render', () => {
    const tree = render(<SlideItem {...mockData} />);
    expect(tree).toMatchSnapshot()
  });
  test('method navigate', async () => {
    const { findByTestId } = render(<SlideItem {...mockData} />);
    const button = await findByTestId('slideItem')
    expect(mockedNavigate).not.toBeCalled();
    fireEvent(button, 'press');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
  test('method fetch', async () => {
    const { findByTestId } = render(<SlideItem {...mockData} />);
    const button = await findByTestId('slideItem')
    expect(mockStore.countryStore.fetchCountryByCode).not.toBeCalled();
    fireEvent(button, 'press');
    expect(mockStore.countryStore.fetchCountryByCode).toHaveBeenCalledTimes(1);
  });
});
