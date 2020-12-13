import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { observer } from "mobx-react";
import storeInstance from '../store/store';
import { styles } from './rawStyles';
import { Isao, Akira, Sae } from 'react-native-textinput-effects';
import { TextInput, Button } from 'react-native-paper';
import { ChipsBlockLayout } from "./ChipsBlockLayout";
import { ChipsTitle } from "./ChipsBlockLayout/ChipsTitle";
import { ChipsContent } from "./ChipsBlockLayout/ChipsContent";
import { Icon } from 'react-native-paper/lib/typescript/src/components/List/List';


export const MainComponent = observer((): JSX.Element => {

    const [value, setValue] = useState('')
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.containerTitle}>Find African Countries!</Text>

                <View>
                    <TextInput
                        left={
                            <TextInput.Icon
                                color='#b3b2b2'
                                name="magnify"
                            />}

                        style={{ backgroundColor: 'transparent', fontSize: 20, }}
                        label="Find countries"
                        theme={{colors: {primary: '#0f4c81'}}}
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                </View>
                <Button
                style={{marginTop: 20}}
                    color='#0f4c81'
                    icon='magnify'
                    mode="contained"
                    onPress={() => storeInstance.fetchCountries(value)}>
                    Search
                 </Button>

                <Text>557788871🍕</Text>
                <Text>{storeInstance.countriesInfo}</Text>

                <ChipsBlockLayout
                    title={<ChipsTitle title='Most Popular' />}
                    chips={<ChipsContent />}
                />
            </View>
        </ScrollView>

    )
})
