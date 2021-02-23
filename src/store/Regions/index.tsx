import { observable, makeObservable, action, runInAction } from 'mobx';
import { RegionName } from './RegionItem/index';


export interface IRegionName {
    Name: string,
    FlagPng: string
    Alpha2Code: string
}

class RegionsStore {

    countries: IRegionName[] = [];

    constructor() {
        makeObservable(this, {
            countries: observable,
            setItem: action,
            workerAfter: action,
            fetchRegions: action
        })
    }
    async fetchRegions(props: string) {
        this.countries = [];

        try {
            const response = await fetch(props)
            const data = await response.json();
            const filteredData = this.workerAfter(data.Response)
            runInAction(() => {
                this.countries = filteredData;
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    workerAfter(data: IRegionName[]) {
      return data.map(el => this.setItem(el))
    }

    setItem(data: IRegionName) {
        const name = new RegionName();
        name.setCountry(data) 
        return name
    }
}

const regionCardsStore = new RegionsStore()

export default regionCardsStore 