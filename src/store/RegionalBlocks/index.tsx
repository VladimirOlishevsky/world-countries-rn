import { action, makeObservable, observable, runInAction } from "mobx"
import { ICountry } from "store/types"
import { Country } from "../Country"

export class RegionalBlocks { 
    countries: Country[] = []
    errorMessage = ''

    constructor() {
        makeObservable(this, {
            countries: observable,
            fetchRegionalBlocks: action,
            workerAfterFetch: action,
            setItem: action
        })
    }

    async fetchRegionalBlocks(props: string) {
        this.countries = []
        this.errorMessage = ''
        try {
            const response = await fetch(props)
            const data = await response.json();
            const dataFromAdapter = this.workerAfterFetch(data)
            runInAction(() => {
                this.countries = dataFromAdapter;
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    workerAfterFetch(data: ICountry[]) {
        return data.map(el => this.setItem(el))
    }

    setItem(data: ICountry) {
        const country = new Country();
        country.fromApi(data)
        return country
    }
}
