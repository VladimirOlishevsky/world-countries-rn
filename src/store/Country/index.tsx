import { observable, makeObservable, action, runInAction } from 'mobx';
import { Currencies } from './Currencies/index';
import { Languages } from './Languages/index';

export interface ICountry {
    name: string,
    capital: string,
    region: string,
    subregion: string,
    population: number,
    latlng: number[]
    currencies: ICurrencies[]
    languages: ILanguages[]
    flag: string
}

export interface ICurrencies {
    name: string,
    symbol: string
}

export interface ILanguages {
    name: string,
    nativeName: string
}


class CountryStore {

    name = ''
    capital = ''
    region = ''
    subregion = ''
    population = 0
    latlng: number[] = []
    currencies: Currencies[] = []
    languages: Languages[] = []
    flag = ''

    param = false;

    constructor() {
        makeObservable(this, {
            name: observable,
            capital: observable,
            region: observable,
            subregion: observable,
            population: observable,
            latlng: observable,
            currencies: observable,
            languages: observable,
            flag: observable,
            param: observable,
            fromApi: action,
            fetchCountry: action
        })
    }
    async fetchCountry(alphaCode: string) {

        this.param = false

        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
            const data = await response.json();
            runInAction(() => {
                this.fromApi(data)
                this.param = true
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    workerAfter(data: ICountry) {
        return this.fromApi(data)
    }

    private setCountryCurrencies(data: ICurrencies[]) {
        return data.map((item) => {
            const currency = new Currencies();
            currency.setCurrencies(item);
            return currency;
        });
    }

    private setCountryLanguages(data: ILanguages[]) {
        return data.map((item) => {
            const language = new Languages();
            language.setLanguages(item);
            return language;
        });
    }

    fromApi(data: ICountry) {
        this.name = data.name;
        this.capital = data.capital;
        this.region = data.region;
        this.subregion = data.subregion;
        this.population = data.population;
        this.latlng = data.latlng;
        this.currencies = this.setCountryCurrencies(data.currencies);
        this.languages = this.setCountryLanguages(data.languages);
        this.flag = data.flag;
    }
}

const countryStore = new CountryStore()

export default countryStore 