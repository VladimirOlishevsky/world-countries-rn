import { Country } from "..";
import fetch, { enableFetchMocks } from 'jest-fetch-mock';
import { mockData, mockErrorData, mockStore2Obj } from './mock'

enableFetchMocks();

describe('Country fetchCountryByCode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('fetchCountryByCode', async () => {

    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const mockCountryStore = new Country();

    const spy = jest.spyOn(mockCountryStore, 'fromApi').mockImplementation(() => mockCountryStore);
    const isAdaptAfterFetching = mockCountryStore.fromApi(mockData);

    expect(spy).toHaveBeenCalled();
    expect(mockCountryStore).toStrictEqual(isAdaptAfterFetching);

    try {
      await mockCountryStore.fetchCountryByCode('MM')
      expect(fetch).toHaveBeenCalledTimes(1);
    } catch (error) {
      console.log(error)
    }
  })
  it('fetchCountryByCode error', async () => {

    fetch.mockReject(() => Promise.reject("API is down"));
    const mockCountryStore = new Country();
    try {
      await mockCountryStore.fetchCountryByCode('EG')
    } catch (error) {
      expect(fetch).toHaveBeenCalledWith('EG');
    }
  })
})

describe('Country fetchCountryByName', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('call method fetchCountryByName', async () => {

    fetchMock.mockResponseOnce(JSON.stringify(mockData));
    const mockCountryStore = new Country();

    const spy = jest.spyOn(mockCountryStore, 'fromApi').mockImplementation(() => mockCountryStore);
    const isAdaptAfterFetching = mockCountryStore.fromApi(mockData);

    expect(spy).toHaveBeenCalled();
    expect(mockCountryStore).toStrictEqual(isAdaptAfterFetching);

    try {
      await mockCountryStore.fetchCountryByName('MM')
      expect(fetch).toHaveBeenCalledTimes(1);
    } catch (error) {
      console.log(error)
    }
  })
  it('call method fetchCountryByName error', async () => {

    fetch.mockReject(() => Promise.reject("API is down"));
    const mockCountryStore = new Country();
    try {
      await mockCountryStore.fetchCountryByName('EG')
    } catch (error) {
      expect(fetch).toHaveBeenCalledWith('EG');
    }
  })
  it('call method fetchCountryByName empty name', async () => {

    fetchMock.mockResponseOnce(JSON.stringify(mockErrorData));
    const mockCountryStore = new Country();
    try {
      await mockCountryStore.fetchCountryByName('EG')
      expect(mockCountryStore.name).toEqual('');
    } catch (error) {
      console.log('error')
    }
  })
})
describe('Country store2Obj', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('call method fromApi', async () => {
    const mockCountryStore = new Country();
    mockCountryStore.fromApi(mockData);
    expect(mockCountryStore.name).toStrictEqual(mockData.name);
  })
  it('call method store2Obj', async () => {
    const mockCountryStore = new Country();
    mockCountryStore.fromApi(mockData);
    expect(mockCountryStore.store2Obj).toStrictEqual(mockStore2Obj);
  })
})