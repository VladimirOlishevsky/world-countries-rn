import { Image, ImageURISource, ImageSourcePropType  } from "react-native"

const spainFlag = require('../assets/images/flags/spain.jpg');
const argentinaFlag = require('../assets/images/flags/argentina.jpg');
const algeriaFlag = require('../assets/images/flags/algeria.jpg');
const rwandaFlag = require('../assets/images/flags/rwanda.jpg');
const portugalFlag = require('../assets/images/flags/portugal.jpg');
const colombiaFlag = require('../assets/images/flags/colombia.jpg');

const arabRegion = require('../assets/images/regions/arab_league.jpg');
const caribbeanRegion = require('../assets/images/regions/caribbean_community.jpg');
const europeRegion = require('../assets/images/regions/european_union.jpg');
const northAmericaRegion = require('../assets/images/regions/north_american_free_trade_agreement.jpg');
const southAmericaRegion = require('../assets/images/regions/union_of_south_american_nations.jpg');

const europe = require('../assets/images/regions/europe.png');
const imageSrc = Image.resolveAssetSource(europe).uri; // need change all img to this type
const asia = require('../assets/images/regions/asia.png')
const africa = require('../assets/images/regions/africa.png')




export const regionCards = [
    {
        title: 'Europe',
        img: Image.resolveAssetSource(europe).uri,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/eu'
    },
    {
        title: 'Asia',
        img: Image.resolveAssetSource(asia).uri,
        link: 'http://countryapi.gear.host/v1/Country/getCountries?pRegion=asia&pSubRegion=eastern%20asia'
    },
    {
        title: 'Africa',
        img: Image.resolveAssetSource(africa).uri,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/au'
    },
]

export const regions = [
    {
        title: 'Europe',
        img: europeRegion,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/eu'
    },
    {
        title: 'North America',
        img: northAmericaRegion,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/nafta'
    },
    {
        title: 'South America',
        img: southAmericaRegion,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/usan'
    },
    {
        title: 'Arab Countries',
        img: arabRegion,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/al'
    },
    {
        title: 'Caribbean Region',
        img: caribbeanRegion,
        link: 'https://restcountries.eu/rest/v2/regionalbloc/caricom'
    },
]

export const flags = [
    {
        title: 'Spain',
        img: spainFlag,
        link: 'https://restcountries.eu/rest/v2/name/spain?fullText=true'
    },
    {
        title: 'Argentina',
        img: argentinaFlag,
        link: 'https://restcountries.eu/rest/v2/name/argentina?fullText=true'
    },
    {
        title: 'Algeria',
        img: algeriaFlag,
        link: 'https://restcountries.eu/rest/v2/name/algeria?fullText=true'
    },
    {
        title: 'Rwanda',
        img: rwandaFlag,
        link: 'https://restcountries.eu/rest/v2/name/rwanda?fullText=true'
    },
    {
        title: 'Portugal',
        img: portugalFlag,
        link: 'https://restcountries.eu/rest/v2/name/portugal?fullText=true'
    },
    {
        title: 'Colombia',
        img: colombiaFlag,
        link: 'https://restcountries.eu/rest/v2/name/colombia?fullText=true'
    },
]

export const slides = [
    {
        title: 'Rhino Refugee Camp, Arua, Uganda',
        img: require('../assets/images/1.jpg'),
    },
    {
        title: 'Bargny, Senegal',
        img: require('../assets/images/2.jpg'),
    },
    {
        title: 'Rhinoceros',
        img: require('../assets/images/3.jpg'),
    },
    {
        title: 'Namibia',
        img: require('../assets/images/4.jpg'),
    }
]
