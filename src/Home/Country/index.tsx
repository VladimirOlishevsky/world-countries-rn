import React from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { styles } from './rawStyles';
import countryStore from '../../store/Country';
import { COUNTRY_TITLES } from './constants';


export const Country = observer(({ route }: any): JSX.Element => {


    return (

        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton />
            </View>
            <ScrollView >
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://flagcdn.com/w640/${route.params.name.toLowerCase()}.png`
                        }}
                    />
                    <Text style={styles.countryName}>
                        {countryStore.name}
                    </Text>
                </View>
                <View style={styles.strings}>
                    <Text style={styles.keys} >
                        {COUNTRY_TITLES.capital}:
                    </Text>
                    <Text style={styles.values}>
                        {countryStore.capital}
                    </Text>
                </View>
                <View style={styles.strings}>
                    <Text style={styles.keys} >
                        {COUNTRY_TITLES.region}:
                    </Text>
                    <Text style={styles.values}>
                        {countryStore.region}
                    </Text>
                </View>
                <View style={styles.strings}>
                    <Text style={styles.keys} >
                        {COUNTRY_TITLES.subregion}:
                    </Text>
                    <Text style={styles.values}>
                        {countryStore.subregion}
                    </Text>
                </View>
                <View style={styles.strings}>
                    <Text style={styles.keys} >
                        {COUNTRY_TITLES.population}:
                    </Text>
                    <Text style={styles.values}>
                        {countryStore.population}
                    </Text>
                </View>
                <View style={styles.strings}>
                    <Text style={styles.keys} >
                        {COUNTRY_TITLES.languages}:
                    </Text>
                    {countryStore.languages.map(el => (
                        <Text key={el.name} style={styles.values}>
                            {el.name}
                        </Text>
                    ))}

                </View>
                <View style={styles.strings}>
                    <Text style={styles.keys} >
                        {COUNTRY_TITLES.currencies}:
                    </Text>
                    {countryStore.currencies.map(el => (
                        <Text key={el.name} style={styles.values}>
                            {el.name}
                        </Text>
                    ))}

                </View>
            </ScrollView>
        </View>

    )
})

