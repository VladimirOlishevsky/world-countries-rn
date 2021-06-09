import { Continents } from ".";
import { mockData } from "./mock";
import fetch, { enableFetchMocks } from 'jest-fetch-mock';

enableFetchMocks()

describe('Continents', () => {
  it('try-catch and workerAfterFetch', async () => {

    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    fetch.mockReject(() => Promise.reject("API is down"));
    const continents = new Continents();

    const spy = jest.spyOn(continents, 'workerAfterFetch');
    const isAdaptAfterFetching = continents.workerAfterFetch(mockData.Response);

    expect(spy).toHaveBeenCalled();
    expect(isAdaptAfterFetching).toBe(isAdaptAfterFetching);
    spy.mockRestore();

    try {
      await continents.fetchRegions('http://countryapi.gear.host/v1/Country/getCountries?pRegion=europe&pSubRegion=western%20europe')
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
})
