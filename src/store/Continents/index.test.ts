import { Continents } from ".";
import { mockData } from "./mock";

jest.mock('./index')

// jest.mock('./index', () => {
//   // Works and lets you check for constructor calls:
//   return {
//     Continents: jest.fn().mockImplementation(() => {
//       return {fetchRegions: async () => await mockData};
//     }),
//   };
// });

// const weekTestData = []
const continents = new Continents()
it('method fetchRegions', async () => {
  
  continents.fetchRegions = jest.fn().mockResolvedValue(mockData);
  const data = await continents.fetchRegions('http://countryapi.gear.host/v1/Country/getCountries?pRegion=europe&pSubRegion=western%20europe');
  expect(data).toBe(mockData)
});


