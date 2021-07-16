import { Country } from "./Country";
import { RegionalBlocks } from "./RegionalBlocks";
import { Continents } from "./Continents";


class RootStore {
    countryStore: Country;
    regionalBlocksStore: RegionalBlocks;
    continentsStore: Continents;

  constructor() {
    this.countryStore = new Country();
    this.regionalBlocksStore = new RegionalBlocks();
    this.continentsStore = new Continents();
  }
}

const rootStore = new RootStore();
export type RootStoreType = RootStore;
export const getRootStore = (): RootStoreType => rootStore;
