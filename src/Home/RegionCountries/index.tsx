import React from 'react';
import { View, Image, Text, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import regionCardsStore from '../../store/Regions';
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { styles } from './rawStyles';


export const RegionCountries = observer(({ route }: any): JSX.Element => {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <BackButton />
                    <Text style={styles.mainTitle}>
                        {route.params.name}
                    </Text>
                </View>

                {regionCardsStore.countries.map((el, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => console.log('region')}
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
            </View>
        </ScrollView>
    )
})

