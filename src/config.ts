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




export const continents = [
    {
        title: 'Europe',
        img: Image.resolveAssetSource(europe).uri,
        link: 'http://countryapi.gear.host/v1/Country/getCountries?pRegion=europe&pSubRegion=western%20europe',
        description: 'Popular European Countries'
    },
    {
        title: 'Asia',
        img: Image.resolveAssetSource(asia).uri,
        link: 'http://countryapi.gear.host/v1/Country/getCountries?pRegion=asia&pSubRegion=eastern%20asia',
        description: 'Popular Asian Countries'
    },
    {
        title: 'Africa',
        img: Image.resolveAssetSource(africa).uri,
        link: 'http://countryapi.gear.host/v1/Country/getCountries?pRegion=africa&pSubRegion=middle%20africa',
        description: 'Popular African Countries'
    },
]

export const regionalBlocks = [
    {
        id: 1,
        title: 'European Union',
        img: 'https://flagpedia.net/data/org/w580/eu.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/eu'
    },
    {
        id: 2,
        title: 'Union of South American Nations',
        img: 'https://flagpedia.net/data/org/w580/usan.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/usan'
    },
    {
        id: 3,
        title: 'African Union',
        img: 'https://flagpedia.net/data/org/w580/au.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/au'
    },
    {
        id: 4,
        title: 'Pacific Community',
        img: 'https://flagpedia.net/data/org/w580/spc.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/pa'
    },
    {
        id: 5,
        title: 'Arab League',
        img: 'https://flagpedia.net/data/org/w580/al.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/al'
    },
    {
        id: 6,
        title: 'Caribbean Community',
        img: 'https://flagpedia.net/data/org/w580/caricom.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/caricom'
    },
    {
        id: 7,
        title: 'Southeast Asian Nations',
        img: 'https://flagpedia.net/data/org/w580/asean.png',
        link: 'https://restcountries.eu/rest/v2/regionalbloc/saarc'
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
