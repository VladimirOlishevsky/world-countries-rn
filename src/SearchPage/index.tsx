import React, { Fragment, useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    //Image,
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
import regionCardsStore from '../store/RegionsStore';
import Image from 'react-native-remote-svg'

export const SearchScreen = observer(({ navigation }: any): JSX.Element => {

    const [value, setValue] = useState('');

    return (

        <View style={styles.container}>
            <InputArea />

            <ScrollView>
               <Image />
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
                    onPress={() => navigation.navigate("Test", { names: value })}
                >Go to About Screen</Button>

                <Text>This is the home screen</Text>
                <Button
                    onPress={() => navigation.navigate("Test", { names: value })}
                >Go to About Screen</Button>
            </ScrollView>


        </View>


    )
})
