import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react-native';
import { ContinentCards } from "..";
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import { Continents } from "store/Continents";
import { Region } from "store/Region";


enableFetchMocks();

const mockData = [
  {
    Name: 'England',
    FlagPng: '111',
    Alpha2Code: '22'
  },
  {
    Name: 'Spain',
    FlagPng: '111',
    Alpha2Code: '22'
  },
]

jest.mock('..', () => (
  { ContinentCards: 'ContinentCards' }));

jest.mock('config/config', () => (
  { continents: 'continents' }));
  
const mockSetOpenModalConfirm = jest.fn();

describe('ContinentCards', () => {
  it('render ContinentCards', () => {
    const tree = render(<ContinentCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('ContinentCards 11', async () => {

  //   // fetchMock.mockResponseOnce(JSON.stringify(mockData));
  //   const tree = render(<ContinentCards />);

  //   const page = tree.getByTestId('Europe');

  //   // fireEvent.press(page)
  //   // expect(fetch).toHaveBeenCalledTimes(1);

  //   const buttonBaseProps = page.props as {
  //     onClick: () => void
  //   };

  //   expect(mockSetOpenModalConfirm).not.toBeCalled();
  //   buttonBaseProps.onClick();
  //   // fireEvent.press(page)
  //   expect(mockSetOpenModalConfirm).toBeCalledWith(true);
  // });
});