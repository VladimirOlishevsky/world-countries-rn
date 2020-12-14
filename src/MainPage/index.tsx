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


export const MainComponent = observer(({ navigation }: any): JSX.Element => {

    const [value, setValue] = useState('')
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        left={
                            <TextInput.Icon
                                style={styles.inputIconStyle}
                                size={25}
                                color='#b3b2b2'
                                name="magnify"
                            />}
                        style={styles.inputStyle}
                        label="Find countries"
                        theme={{ colors: { primary: '#0f4c81' } }}
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                </View>
                <Button
                    style={{ marginTop: 20 }}
                    color='#0f4c81'
                    icon='magnify'
                    mode="contained"
                    onPress={() => storeInstance.fetchCountries(value)}>
                    Search
                 </Button>
                <View style={{ marginTop: 30 }}>
                    <ChipsBlockLayout
                        title={<ChipsTitle title='Most Popular' />}
                        chips={<ChipsContent />}
                    />
                </View>
                <Text>557788871🍕</Text>
                <Text>{storeInstance.countriesInfo}</Text>


                <Text>This is the home screen</Text>
                <Button
                    onPress={() => navigation.navigate("Test", { names: value })}
                >Go to About Screen</Button>
            </View>
        </ScrollView>

    )
})
