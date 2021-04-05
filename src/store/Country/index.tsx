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
    alpha2Code: string
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
    alpha2Code = ''

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
            Languages: this.languages
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
        this.flag = data.flag;
        this.alpha2Code = data.alpha2Code
    }
}

class RegionalBlocks {
    countries: CountryStore[] = []
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
        const country = new CountryStore();
        country.fromApi(data)
        return country
    }
}

const countryStore = new CountryStore()

const regionalBlocksStore = new RegionalBlocks();
export { regionalBlocksStore }

export default countryStore
