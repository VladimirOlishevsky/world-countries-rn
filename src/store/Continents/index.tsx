import { observable, makeObservable, action, runInAction } from 'mobx';
import { RegionName } from './RegionItem/index';


export interface IRegionName {
    Name: string,
    FlagPng: string
    Alpha2Code: string
}

export class Continents {

    countries: IRegionName[] = [];

    constructor() {
        makeObservable(this, {
            countries: observable,
            setItem: action,
            workerAfterFetch: action,
            fetchRegions: action
        })
    }
    async fetchRegions(props: string) {
        this.countries = [];

        try {
            const response = await fetch(props)
            const data = await response.json();
            const filteredData = this.workerAfterFetch(data.Response)
            runInAction(() => {
                this.countries = filteredData;
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    workerAfterFetch(data: IRegionName[]) {
      return data.map(el => this.setItem(el))
    }

    setItem(data: IRegionName) {
        const region = new RegionName();
        region.setCountry(data) 
        return region
    }
}

// const regionCardsStore = new RegionsStore()

// export default regionCardsStore 