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

export interface ICurrencies {
    name: string,
    symbol: string
}

export interface ILanguages {
    name: string,
    nativeName: string
}

export interface IRegionName {
    Name: string,
    FlagPng: string
    Alpha2Code: string
}