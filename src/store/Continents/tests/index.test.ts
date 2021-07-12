import { Continents } from "..";
import { Region } from '../Region'
import fetch, { enableFetchMocks } from 'jest-fetch-mock';

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

describe('Continents', () => {
  it('fetchRegions and try-catch', async () => {

    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const continents = new Continents();
    const mockAdaptData = mockData.map(el => new Region(el));

    const spy = jest.spyOn(continents, 'workerAfterFetch').mockImplementation(() => mockAdaptData);
    const isAdaptAfterFetching = continents.workerAfterFetch(mockData);

    expect(spy).toHaveBeenCalled();
    expect(mockAdaptData).toStrictEqual(isAdaptAfterFetching);

    try {
      await continents.fetchRegions('http://countryapi.gear.host')
      expect(fetch).toHaveBeenCalledTimes(1);
    } catch (error) {
      console.log(error)
    }
  })
  it('error', async () => {

    fetch.mockReject(() => Promise.reject("API is down"));
    const continents = new Continents();
    try {
      await continents.fetchRegions('http://countryapi.gear.host/v1/Cou')
    } catch (error) {
      expect(fetch).toHaveBeenCalledWith(
        "http://countryapi.gear.host/v1/Cou"
      );
    }
  })
  it('workerAfterFetch', async () => {

    const continents = new Continents();

    const mockAdaptData = mockData.map(el => new Region(el));
    const dataWorkerAfterFetch = continents.workerAfterFetch(mockData);
    expect(mockAdaptData).toEqual(dataWorkerAfterFetch);
  })
})