import React from 'react';
import { View } from "react-native"
import { Card, Title, useTheme } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { getRootStore } from '../../store';
import { continents } from '../../config';
import { makeStyles } from './rawStyles';

export const ContinentCards = (() => {

    const { continentsStore } = getRootStore()
    const navigation = useNavigation();
    const { spacing, size, colors } = useTheme();
    const white = colors.white
    const styles = makeStyles({ spacing, size, white })

    const actionByClick = (element: string, description: string) => {
        continentsStore.fetchRegions(element);
        navigation.navigate("ContinentCountries", { name: description })
    }
    return (
        <View style={styles.container}>
            {continents.map((el, index) => {
                return (
                    <TouchableOpacity key={index}
                        onPress={() => actionByClick(el.link, el.description)}>
                        <Card
                            style={styles.container}
                        >
                            <Card.Cover source={{ uri: el.img }} />
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

