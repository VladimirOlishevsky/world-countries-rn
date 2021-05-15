import React from "react";
import { View } from "react-native"
import { makeStyles } from './rawStyles';
import { observer } from 'mobx-react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { regionalBlocks } from "../../config/config";
import { Card, Title, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { getRootStore } from "../../store";


export const RegionalCards = observer(() => {
    const theme = useTheme()
    const styles = makeStyles(theme);

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

