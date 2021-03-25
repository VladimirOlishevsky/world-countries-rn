import React, { Fragment, useState } from "react";
import { Image, View, Text } from "react-native"
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { regions } from "../../config";
import { Card, Title } from "react-native-paper";


export const SearchRegions = observer(() => {

    return (
        <View style={{ marginTop: 30 }}>
            {regions.map((el) => {
                return (
                    <TouchableOpacity key={el.id} onPress={() => console.log('region')} style={{ flexDirection: 'column' }}>
                        <Card
                            style={{ marginTop: 30 }}
                        >
                            <Card.Cover source={{ uri: el.img }} />
                            <Title >
                                {el.title}
                            </Title>
                        </Card>
                    </TouchableOpacity>
                )
            })}
</View>    )
})

