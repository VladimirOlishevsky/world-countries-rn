import { getRootStore } from "..";
import { Region } from "../Region";

const mockRegion = {
  Name: 'England',
  FlagPng: 'ooo',
  Alpha2Code: 'EN'
}

describe("Store tests", () => {
  it("creates new regions", () => {
    const { continentsStore } = getRootStore()
    const mockedRegion = new Region(mockRegion);
    continentsStore.countries.push(mockedRegion);
    expect(continentsStore.countries.length).toBe(1)
  })
})