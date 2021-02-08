import { observable, makeObservable, action, runInAction } from 'mobx';


interface IRegionName {
    name: string,
    flag: string
}

class RegionName {

    name = ''
    flag = ''

    constructor() {
        makeObservable(this, {
            name: observable,
            flag: observable,
            setCountry: action,
        });
    }

    setCountry(data: IRegionName) {
        this.name = data.name;
        this.flag = data.flag
    }

}

class RegionsStore {

    countries: IRegionName[] = [];

    constructor() {
        makeObservable(this, {
            countries: observable,
            countryName: action,
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
            const filteredData = this.workerAfter(data)
            runInAction(() => {
                this.countries = filteredData;
                console.log(this.countries)
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

    countryName (data: IRegionName) {
        return data.name
    };
}

const regionCardsStore = new RegionsStore()

export default regionCardsStore 