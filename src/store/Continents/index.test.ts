import { Continents } from ".";


const getReturnValueNext = { data: [{ id: 1 }] };
const getReturnValueWaiting = { data: [{ id: 2 }] };
const getReturnValueMySkills = { data: [{ id: 3 }] };
const getReturnValueNoticeForOrganizer = { data: [{ id: 4 }] };
const getReturnValueNoticeForSchool = { data: [{ id: 5 }] };

const mockGetNext = jest.fn(() => getReturnValueNext);
const mockGetWaiting = jest.fn(() => getReturnValueWaiting);
const mockGetMySkills = jest.fn(() => getReturnValueMySkills);
const mockGetNotificationForOrganizer = jest.fn(() => getReturnValueNoticeForOrganizer);
const mockGetNotificationForSchool = jest.fn(() => getReturnValueNoticeForSchool);

jest.mock('mobx', () => ({
  makeAutoObservable: jest.fn(),
  action: { bound: 'action.bound' },
}));

describe('111', () => { // TODO - update
  test('method fetchEventsNext "try" branch', async () => {
    const store = new Continents();
     store.fetchRegions('http://countryapi.gear.host/v1/Country/getCountries?pRegion=europe&pSubRegion=western%20europe')
    .then(async () => {
    await expect(store.countries.length).toBeGreaterThan(0);  
    });
    // expect(store.countries.length).toBeGreaterThan(0);
  });
})

