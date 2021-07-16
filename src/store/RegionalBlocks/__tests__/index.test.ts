import { RegionalBlocks } from "..";
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import { mockDataForRegionalBlocks } from '../mock'
import { Country } from "store/Country";

enableFetchMocks();

describe('RegionalBlocks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('call method fetchCountryByCode', async () => {

    fetchMock.mockResponseOnce(JSON.stringify(mockDataForRegionalBlocks));
    const mockRegionalBlocksStore = new RegionalBlocks();

    try {
      await mockRegionalBlocksStore.fetchRegionalBlocks('MM')
      expect(fetch).toHaveBeenCalledTimes(1);
    } catch (error) {
      console.log(error)
    }
  })
  it('call method fetchCountryByCode error', async () => {

    fetch.mockReject(() => Promise.reject("API is down"));
    const mockRegionalBlocksStore = new RegionalBlocks();
    try {
      await mockRegionalBlocksStore.fetchRegionalBlocks('MM')
    } catch (error) {
      expect(fetch).toHaveBeenCalledWith('EG');
    }
  })
  it('call method setItem', () => {

    const mockRegionalBlocksStore = new RegionalBlocks();
    const mockSetItem = mockRegionalBlocksStore.setItem(mockDataForRegionalBlocks[0]);
    const mockCountry = new Country();
    mockCountry.fromApi(mockDataForRegionalBlocks[0]);

    expect(mockSetItem).toEqual(mockCountry);
  })
  it('call method setItem', () => {
    const mockRegionalBlocksStore = new RegionalBlocks();
    const mockWorkerAfterFetch = mockRegionalBlocksStore.workerAfterFetch(mockDataForRegionalBlocks);

    const adaptMockCountry = mockDataForRegionalBlocks.map(el => {
      const mockCountry = new Country();
      mockCountry.fromApi(el)
      return mockCountry
    })
    
    expect(mockWorkerAfterFetch).toEqual(adaptMockCountry);
  })
})