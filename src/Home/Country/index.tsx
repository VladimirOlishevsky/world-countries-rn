import React from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { styles } from './rawStyles';
import { getRootStore } from '../../store';
import { Maps } from '../Maps';


export const Country = observer(({ route }: any): JSX.Element => {

    const { countryStore } = getRootStore()

    const isCoordinate = Boolean(countryStore.latlng[0] && countryStore.latlng[1])

    return (
        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton />
            </View>

            <ScrollView >
                {countryStore.errorMessage ? <Text>'sdfsdfsdf'</Text> :
                    <>
                        <View style={styles.content}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: countryStore.alpha2Code
                                        ? `https://flagcdn.com/w640/${countryStore.alpha2Code.toLowerCase()}.png`
                                        : `https://flagcdn.com/w640/${route.params.name.toLowerCase()}.png`

                                }}
                            />
                            <Text style={styles.countryName}>
                                {countryStore.name}
                            </Text>
                        </View>
                        {Object.values(countryStore.store2Obj).map((el, index) => (
                            <View key={index} style={styles.strings}>
                                <Text style={styles.keys} >
                                    {countryStore.getKeyByValue(countryStore.store2Obj, el)}:
                        </Text>
                                {Array.isArray(el)
                                    ? (
                                        <View style={styles.column}>
                                            {el.map((el: any) => (
                                                <Text key={el.name} style={styles.values}>
                                                    {el.name}
                                                </Text>
                                            ))}
                                        </View>
                                    )
                                    :
                                    <Text key={el} style={styles.values}>
                                        {el}
                                    </Text>
                                }

                            </View>
                        )
                        )}
                    </>
                }
                {isCoordinate &&
                    <Maps
                        description={countryStore.name}
                        latitude={countryStore.latlng[0]}
                        longitude={countryStore.latlng[1]}
                    />
                }
            </ScrollView>
        </View>
    )
})

