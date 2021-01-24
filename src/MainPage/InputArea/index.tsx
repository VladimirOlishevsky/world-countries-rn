import React, { useState } from "react";
import { View } from "react-native"
import { TextInput, Button } from 'react-native-paper';
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import storeInstance from "../../store/store";


export const InputArea = observer((): JSX.Element => {
    const [value, setValue] = useState('');
    return (
        <View style={styles.inputContainer}>

            <TextInput
                style={styles.inputStyle}
                onSubmitEditing={() => {
                    storeInstance.fetchCountries(value)
                }}
                left={
                    <TextInput.Icon
                        style={styles.inputIconStyle}
                        size={25}
                        color='#b3b2b2'
                        name="magnify"
                    />}
                label="Find countries"
                theme={{
                    colors: { primary: '#0f4c81' }
                }}
                value={value}
                onChangeText={text => setValue(text)}
            />
            <Button
                style={styles.button}
                color='#0f4c81'
                icon='magnify'
                mode="contained"
                onPress={() => storeInstance.fetchCountries(value)}>
                Search
             </Button>
        </View>)
})

