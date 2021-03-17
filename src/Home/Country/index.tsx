import React from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { styles } from './rawStyles';
import countryStore from '../../store/Country';
import { COUNTRY_ARRAYS, COUNTRY_TITLES, COUNTRY_TITLES_All } from './constants';


const arrFrom = Array.from(Object.keys(COUNTRY_TITLES))

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

                {Object.values(COUNTRY_TITLES_All).map(el => (
                    <View key={el} style={styles.strings}>
                        <Text style={styles.keys} >
                            {el}:
                        </Text>

                        {typeof countryStore.store2Obj[el] === 'object'
                            ? (
                                <View style={styles.column}>
                                    {countryStore.store2Obj[el].map((el: any) => (
                                        <Text key={el.name} style={styles.values}>
                                            {el.name}
                                        </Text>
                                    ))}
                                </View>
                            )
                            :
                            <Text key={el} style={styles.values}>
                                {countryStore.store2Obj[el]}
                            </Text>
                        }
                    </View>
                )
                )}
                {/* <Text style={styles.keys} >
                    {COUNTRY_ARRAYS.currencies}:
                </Text>
                <View style={styles.column}>
                    <Text style={styles.values}>
                        {countryStore.currencies.map((el: any) => (
                            <Text key={el.name} style={styles.values}>
                                {el.name}
                            </Text>
                        ))}
                    </Text>
                </View>

                <Text style={styles.keys} >
                    {COUNTRY_ARRAYS.languages}:
                </Text>
                <View style={styles.column}>
                    <Text style={styles.values}>
                        {countryStore.languages.map((el: any) => (
                            <Text key={el.name} style={styles.values}>
                                {el.name}
                            </Text>
                        ))}
                    </Text>
                </View> */}
            </ScrollView>
        </View>
    )
})

