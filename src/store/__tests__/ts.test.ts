import { getRootStore } from "..";
import { RegionName } from "../Continents/RegionItem";

const mockData = {
    Name: 'England',
    FlagPng: 'ooo',
    Alpha2Code: 'EN'
}
describe("TodoStore", () => {
    it("creates new todos", () => {
      const {continentsStore} = getRootStore()
      const name = new RegionName();
      name.setCountry(mockData)
      continentsStore.countries.push(name)
      expect(continentsStore.countries.length).toBe(1)
    })
})