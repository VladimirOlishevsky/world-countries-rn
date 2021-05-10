import { Image } from "react-native";

const europe = require('../../assets/images/regions/europe.png');
const imageSrc = Image.resolveAssetSource(europe).uri; // need change all img to this type
const asia = require('../../assets/images/regions/asia.png')
const africa = require('../../assets/images/regions/africa.png');

export const notFoundPicture = require('../../assets/images/no-results.png')

const nepal = Image.resolveAssetSource(require('../../assets/images/slider/Ama_Dablam_mountain_Nepal.png')).uri; 
const brazil = Image.resolveAssetSource(require('../../assets/images/slider/Cristo_iluminado_Brazil.png')).uri; 
const japan = Image.resolveAssetSource(require('../../assets/images/slider/Kyoto_Japan.png')).uri; 
const uruguay = Image.resolveAssetSource(require('../../assets/images/slider/Montevideo_department_Uruguay.png')).uri; 
const russia = Image.resolveAssetSource(require('../../assets/images/slider/Moscow_Kremlin_Russia.png')).uri; 
const rwanda = Image.resolveAssetSource(require('../../assets/images/slider/Nyungwe_park_Rwanda.png')).uri; 
const usa = Image.resolveAssetSource(require('../../assets/images/slider/New_York_USA.png')).uri; 
const india = Image.resolveAssetSource(require('../../assets/images/slider/Taj_Mahal_India.png')).uri; 
const kenya = Image.resolveAssetSource(require('../../assets/images/slider/Sunset_in_Kenya_Kenya.png')).uri; 



export const sliderImage = [
    {
        title: 'Sunset in Kenya, Kenya',
        img: kenya,
        iso_2cc: "KE"
    },
    {
        title: 'Ama Dablam mountain, Nepal',
        img: nepal,
        iso_2cc: "NP"
    },
    {
        title: 'Cristo iluminado, Brazil',
        img: brazil,
        iso_2cc: "BR",
    },
    {
        title: 'Kyoto, Japan',
        img: japan,
    },
    {
        title: 'Montevideo department, Uruguay',
        img: uruguay,
        iso_2cc: "JP"
    },
    {
        title: 'Moscow, Kremlin, Russia',
        img: russia,
        iso_2cc: "RU"
    },
    {
        title: 'Nyungwe park, Rwanda',
        img: rwanda,
        iso_2cc: "RW",
    },
    {
        title: 'Taj Mahal, India',
        img: india,
        iso_2cc: "IO"
    },
     {
        title: 'New York, USA',
        img: usa,
        iso_2cc: "US"
    },
]

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


// export const slides = [
//     {
//         title: 'Rhino Refugee Camp, Arua, Uganda',
//         img: require('../assets/images/1.jpg'),
//     },
//     {
//         title: 'Bargny, Senegal',
//         img: require('../assets/images/2.jpg'),
//     },
//     {
//         title: 'Rhinoceros',
//         img: require('../assets/images/3.jpg'),
//     },
//     {
//         title: 'Namibia',
//         img: require('../assets/images/4.jpg'),
//     }
// ]
