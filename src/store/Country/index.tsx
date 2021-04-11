import { observable, makeObservable, action, runInAction, computed } from 'mobx';
import { Currencies } from './Currencies/index';
import { Languages } from './Languages/index';


export interface ICountry {
    name: string,
    capital: string,
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    currencies: ICurrencies[],
    languages: ILanguages[],
    flag: string,
    alpha2Code: string,
    topLevelDomain: string[],
    callingCodes: string[]
}

type CountryCard = Omit<ICountry, "latlng" | "flag">;

export interface ICurrencies {
    name: string,
    symbol: string
}

export interface ILanguages {
    name: string,
    nativeName: string
}

export class Country {

    name = ''
    capital = ''
    region = ''
    subregion = ''
    population = 0
    latlng: number[] = []
    currencies: Currencies[] = []
    languages: Languages[] = []
    flag = ''
    alpha2Code = ''
    topLevelDomain: string[] = []
    callingCodes: string[] = []

    param = false
    errorMessage = ''

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
            topLevelDomain: observable,
            callingCodes: observable,

            errorMessage: observable,
            alpha2Code: observable,

            fromApi: action,
            fetchCountryByCode: action,
            fetchCountryByName: action,
            getKeyByValue: action,

            store2Obj: computed,
        })
    }
    async fetchCountryByCode(alphaCode: string) {

        this.param = true

        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
            const data = await response.json();
            runInAction(() => {
                this.fromApi(data)
                this.param = false
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    async fetchCountryByName(props: string) {

        this.errorMessage = ''

        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${props}?fullText=true`)
            const data = await response.json();
            runInAction(() => {
                if (data.message) {
                    this.errorMessage = data.message
                    return
                }


                this.fromApi(data[0])
                this.param = false
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

    getKeyByValue(object: any, value: any) {
        return Object.keys(object).find(key => object[key] === value);
    }

    get store2Obj() {
        return {
            Capital: this.capital,
            Region: this.region,
            Subregion: this.subregion,
            Population: this.population,
            Currencies: this.currencies,
            Languages: this.languages,
            Domain: this.topLevelDomain[0],
            PhoneCode: this.callingCodes[0]
        }
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
        this.flag = `https://flagcdn.com/w640/${data.alpha2Code.toLowerCase()}.png`;
        this.alpha2Code = data.alpha2Code;
        this.topLevelDomain = data.topLevelDomain
        this.callingCodes = data.callingCodes
    }
}