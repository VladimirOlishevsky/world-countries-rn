import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native"
// import { TouchableOpacity } from "react-native-gesture-handler";
import { observer } from 'mobx-react';
import { BackButton } from '../../Navigation/BackButton/index';
import { useNavigation } from '@react-navigation/native';
import { getRootStore } from '../../store';
import { useTheme } from 'react-native-paper';
import { makeStyles } from './rawStyles';


export const ContinentCountries = observer(({ route }: any): JSX.Element => {

    const theme = useTheme();
    const styles = makeStyles(theme)

    const { countryStore, continentsStore } = getRootStore();
    const navigation = useNavigation();

    const actionByClick = (code: string) => {
        countryStore.fetchCountryByCode(code);
        navigation.navigate("Country", { name: code });
    }
    return (

        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton />
                <Text style={styles.mainTitle}>
                    {route.params.name}
                </Text>
            </View>
            <ScrollView>
                {continentsStore.countries.map((el, index: number) => {
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
                })}
            </ScrollView>
        </View>
    )
})

