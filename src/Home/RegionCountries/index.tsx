import React from 'react';
import { View, Image, Text, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import regionCardsStore from '../../store/Regions';
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { styles } from './rawStyles';
import countryStore, { regionalBlocksStore } from '../../store/Country';
import { useNavigation } from '@react-navigation/native';


export const RegionCountries = observer(({ route }: any): JSX.Element => {

    const navigation = useNavigation();

    const actionByClick = (code: string) => {
        countryStore.fetchCountryByCode(code);
        navigation.navigate("Country", { name: code });
    }

    console.log(regionalBlocksStore.countries)

    return (

        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.mainTitle}>
                    {route.params.name}
                </Text>
            </View>
            <ScrollView>
                {/* {regionCardsStore.countries.map((el, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => actionByClick(el.Alpha2Code)}
                            style={styles.imageWrapper}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: el.FlagPng
                                }}
                            />
                            <Text style={styles.titles}>
                                {el.Name}
                            </Text>
                        </TouchableOpacity>
                    )
                })} */}
                {regionalBlocksStore.countries.map((el, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => actionByClick(el.Alpha2Code)}
                            style={styles.imageWrapper}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: el.FlagPng
                                }}
                            />
                            <Text style={styles.titles}>
                                {el.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
})

