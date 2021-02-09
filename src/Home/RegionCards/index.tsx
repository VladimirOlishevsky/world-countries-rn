import React from 'react';
import { View } from "react-native"
import { Card, Title } from 'react-native-paper';
import { styles } from './rawStyles';
import { TouchableOpacity } from "react-native-gesture-handler";
import storeInstance from '../../store/store';
import regionCardsStore from '../../store/Regions';

interface Props {
    regionCards: Record<string, string>[] // add correct type
}

export const RegionCards = ({
    regionCards
}: Props) => {

    return (
        <View style={{ marginTop: 30 }}>
            {regionCards.map((el, index) => {
                return (
                    <TouchableOpacity key={index}
                        onPress={() => regionCardsStore.fetchRegions(el.link)}>
                        <Card
                            style={{ marginTop: 30 }}
                        >
                            <Card.Cover source={{ uri: el.img }} />
                            <Title style={styles.cardTitle}>{el.title}</Title>
                        </Card>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

