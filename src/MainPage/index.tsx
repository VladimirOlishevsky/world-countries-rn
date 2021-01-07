import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { observer } from "mobx-react";
import storeInstance from '../store/store';
import { styles } from './rawStyles';
import { TextInput, Button } from 'react-native-paper';
import { ChipsBlockLayout } from "./ChipsBlockLayout";
import { ChipsTitle } from "./ChipsBlockLayout/ChipsTitle";
import { ChipsContent } from "./ChipsBlockLayout/ChipsContent";
import { InputArea } from './InputArea';


export const MainComponent = observer(({ navigation }: any): JSX.Element => {

    const [value, setValue] = useState('');

    return (

        <View style={styles.container}>
            <InputArea />
            <ScrollView>
                <ChipsBlockLayout
                    title={<ChipsTitle title='Most Popular' />}
                    chips={<ChipsContent />}
                />
                <Text>557788871🍕</Text>
                <Text>{storeInstance.countriesInfo}</Text>


                <Text>This is the home screen</Text>
                <Button
                    onPress={() => navigation.navigate("Test", { names: value })}
                >Go to About Screen</Button>
                
            </ScrollView>
        </View>


    )
})
