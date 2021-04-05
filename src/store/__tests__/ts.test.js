import regionCardsStore from '../Regions'
import { RegionName } from '../Regions/RegionItem';

const mockData = {
    Name: 'England',
    FlagPng: 'ooo',
    Alpha2Code: 'EN'
}

describe("TodoStore", () => {
    it("creates new todos", () => {
      const store = regionCardsStore
      const name = new RegionName();
      name.setCountry(mockData)
      store.countries.push(name)
    //   store.createTodo("todo2")
      expect(store.countries.length).toBe(1)
    })
})