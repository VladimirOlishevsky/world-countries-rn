import React, { Fragment, useState } from "react";
import { Image, View, Text } from "react-native"
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { regionalBlocks } from "../../config";
import { Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
// import regionCardsStore from '../../store/Continents';
// import { regionalBlocksStore } from "../../store/Country";
import { getRootStore } from "../../store";


export const RegionalCards = observer(() => {


    const { regionalBlocksStore } = getRootStore()
    const navigation = useNavigation();

    const actionByClick = (el: string, desc: string) => {
        regionalBlocksStore.fetchRegionalBlocks(el);
        navigation.navigate("RegionalCountries", { name: desc })
    }

    return (
        <View style={styles.container}>
            {regionalBlocks.map((el) => {
                return (
                    <TouchableOpacity key={el.id} onPress={() => actionByClick(el.link, el.title)}>
                        <Card style={styles.card}>
                            <Card.Cover source={{ uri: el.img }} />
                        </Card>
                        <View style={styles.titleBlock}>
                            <Title style={styles.title}>
                                {el.title}
                            </Title>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>)
})

