import React, { Fragment, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { observer } from "mobx-react";
import storeInstance from '../store/store';
import { styles } from './rawStyles';
import { TextInput, Button } from 'react-native-paper';
import { ChipsBlockLayout } from "./ChipsBlockLayout";
import { ChipsTitle } from "./ChipsBlockLayout/ChipsTitle";
import { ChipsContent } from "./ChipsBlockLayout/ChipsContent";
import { InputArea } from './InputArea';
import { flags } from '../config';

import { SliderFlags } from './SliderFlags';
import { sliderFlagsTitle } from './strings';
import { regions } from '../config';
import { Regions } from './Regions';
//import Image from 'react-native-remote-svg'
import { SvgCssUri } from 'react-native-svg';
import regionCardsStore from '../store/Regions';
//import FastImage from 'react-native-fast-image'

export const SearchScreen = observer(({ navigation }: any): JSX.Element => {

    const [value, setValue] = useState('');

    return (

        <View style={styles.container}>
            <InputArea />

            <ScrollView>
                {regionCardsStore.countries.map((el, index: number) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => console.log('region')} style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                            <Image
                                style={{ width: 100, height: 70 }}
                                source={{
                                    uri: el.FlagPng
                                }}
                            />
                            <Text >
                                {el.Name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
                <ChipsTitle title={sliderFlagsTitle} />
                <SliderFlags slides={flags} />
                <ChipsBlockLayout
                    title={<ChipsTitle title='Most Popular' />}
                    chips={<ChipsContent />}
                />
                <Text>557788871🍕</Text>
                <Text>{storeInstance.countriesInfo}</Text>


                <Text>This is the home screen</Text>

                <Regions regionsArr={regions} />


                <Button
                    onPress={() => navigation.navigate("Test", { names:  storeInstance.value })}
                >Go to About Screen</Button>

                <Text>This is the home screen</Text>
                <Button
                    onPress={() => navigation.navigate("Test", { names:  storeInstance.value })}
                >Go to About Screen</Button>
            </ScrollView>


        </View>


    )
})
