import { action, runInAction, makeAutoObservable } from 'mobx';
import { ICountry, ICurrencies, ILanguages } from '../types';

type IObjectKeys = {
    [key: string]: string | number |  ICurrencies[] | ILanguages[];
  }

export interface ICountryStore2Obj extends IObjectKeys { 
    Capital: string,
    Region: string,
    Subregion: string,
    Population: number,
    Currencies: ICurrencies[],
    Languages: ILanguages[],
    Domain: string,
    PhoneCode: string,
}


export class Country {

    name = ''
    capital = ''
    region = ''
    subregion = ''
    population = 0
    latlng: number[] = []
    currencies: ICurrencies[] = []
    languages: ILanguages[] = []
    flag = ''
    alpha2Code = ''
    topLevelDomain: string[] = []
    callingCodes: string[] = []

    // errorMessage = ''

    constructor() {
        makeAutoObservable(this, {
            fromApi: action,
            fetchCountryByCode: action,
            fetchCountryByName: action,
            // getKeyByValue: action,
        });
    }
    async fetchCountryByCode(alphaCode: string) {
        // this.errorMessage = ''
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
            const data = await response.json();
            runInAction(() => {
                this.fromApi(data)
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    async fetchCountryByName(props: string) {
        // this.errorMessage = ''
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${props}?fullText=true`)
            const data = await response.json();
            runInAction(() => {
                if (data.message) {
                    this.name = ''
                    return
                }
                this.fromApi(data[0])
            });
        } catch (error) {
            runInAction(() => {
                console.log(error)
            })
        }
    }

    get store2Obj(): ICountryStore2Obj {
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

    fromApi(data: ICountry) {
        this.name = data.name;
        this.capital = data.capital;
        this.region = data.region;
        this.subregion = data.subregion;
        this.population = data.population;
        this.latlng = data.latlng;
        this.currencies = data.currencies
        this.languages = data.languages;
        this.flag = `https://flagcdn.com/w640/${data.alpha2Code.toLowerCase()}.png`;
        this.alpha2Code = data.alpha2Code;
        this.topLevelDomain = data.topLevelDomain
        this.callingCodes = data.callingCodes
    }
}