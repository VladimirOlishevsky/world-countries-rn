import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    // Image,
    // TouchableOpacity
} from 'react-native';
import { observer } from "mobx-react";
import storeInstance from '../store/store';
import { styles } from './rawStyles';
import { Button } from 'react-native-paper';
// import { ChipsBlockLayout } from "./ChipsBlockLayout";
// import { ChipsTitle } from "./ChipsBlockLayout/ChipsTitle";
// import { ChipsContent } from "./ChipsBlockLayout/ChipsContent";
import { InputArea } from './InputArea';
// import { flags } from '../config';

// import { SliderFlags } from './SliderFlags';
// import { sliderFlagsTitle } from './strings';
import { RegionalCards } from './Regions';
// import { SvgCssUri } from 'react-native-svg';
// import regionCardsStore from '../store/Continents';

export const SearchScreen = observer(({ navigation }: any): JSX.Element => {

    const [value, setValue] = useState('');

    return (

        <View style={styles.container}>
            <InputArea />
            <ScrollView>
                {/* <ChipsTitle title={sliderFlagsTitle} /> */}
                {/* <SliderFlags slides={flags} /> */}
                {/* <ChipsBlockLayout
                    title={<ChipsTitle title='Most Popular' />}
                    chips={<ChipsContent />}
                />
                <Text>557788871🍕</Text>
                <Text>{storeInstance.countriesInfo}</Text> */}


                {/* <Text>This is the home screen</Text> */}

                <RegionalCards />


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
