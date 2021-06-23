import React from 'react';
import { View, TouchableOpacity } from "react-native"
import { Card, Title, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getRootStore } from '../../store';
import { continents } from '../../config/config';
import { makeStyles } from './rawStyles';

export const ContinentCards = (() => {

    const { continentsStore } = getRootStore()
    const navigation = useNavigation();
    const theme = useTheme();
    const styles = makeStyles(theme)

    const actionByClick = (element: string, description: string) => {
        continentsStore.fetchRegions(element);
        navigation.navigate("ContinentCountries", { name: description })
    }
    return (
        <View style={styles.container}>
            {continents.map((el, index) => {
                return (
                    <TouchableOpacity
                        // testID='fetchContinents'
                        key={index}
                        onPress={() => actionByClick(el.link, el.description)}>
                        <Card
                            style={styles.container}
                        >
                            <Card.Cover key={new Date().getTime()} source={{ uri: `${el.img}?${Date.now()}` }} />
                            <Title style={styles.cardTitle}>
                                {el.title}
                            </Title>
                        </Card>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
})

