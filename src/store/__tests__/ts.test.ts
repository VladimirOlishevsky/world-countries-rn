import { getRootStore } from "..";
import { Region } from "../Continents/Region";
import { Image } from "react-native";
import { waitFor } from "@testing-library/react-native";
const europe = require('../../../assets/images/regions/europe.png');

const mockRegion = {
  Name: 'England',
  FlagPng: 'ooo',
  Alpha2Code: 'EN'
}

const mockContinents = {
  title: 'Europe',
  img: Image.resolveAssetSource(europe).uri,
  link: 'http://countryapi.gear.host/v1/Country/getCountries?pRegion=europe&pSubRegion=western%20europe',
  description: 'Popular European Countries'
}

describe("Store tests", () => {
  it("creates new regions", () => {
    const { continentsStore } = getRootStore()
    const name = new Region(mockRegion);
    continentsStore.countries.push(name);
    expect(continentsStore.countries.length).toBe(1)
  })
})

// describe("Store tests", () => {
//   it("creates new continents", async () => {
//     const { continentsStore } = getRootStore();

//     continentsStore.fetchRegions(mockContinents.link)
//     console.log(continentsStore.countries.length)
//     // const name = new Region(mockRegion);
//     // continentsStore.countries.push(name)
//    await waitFor(() => expect(continentsStore.countries.length).toBeGreaterThan(0))
//   })
// })