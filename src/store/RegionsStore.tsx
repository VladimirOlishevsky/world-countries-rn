import { observable, makeObservable, action, runInAction } from 'mobx';


interface IRegionName {
    name: string
}

class RegionsStore {

    countries = [];

    constructor() {
        makeObservable(this, {
            countries: observable,
            countryName: action
        })
    }
    async fetchRegions(props: string) {
        this.countries = [];

        try {
            const response = await fetch(props)
            const data = await response.json();
            const countriesNameArr = data.map((el: IRegionName) => this.countryName(el));
            runInAction(() => {
                this.countries = countriesNameArr;
                console.log(this.countries)
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    countryName (data: IRegionName) {
        return data.name
    };
}

const regionCardsStore = new RegionsStore()

export default regionCardsStore 