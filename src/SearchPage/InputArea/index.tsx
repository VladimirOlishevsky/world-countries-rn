import React, { useState } from "react";
import { View } from "react-native"
import { TextInput, Button } from 'react-native-paper';
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import storeInstance from "../../store/store";
import { Fumi } from 'react-native-textinput-effects';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export const InputArea = observer((): JSX.Element => {
    const [value, setValue] = useState('');
    return (
        <View style={styles.inputContainer}>

            <Fumi
                style={styles.inputStyle}
                label={'Find countries'}
                iconClass={FontAwesomeIcon}
                iconName={'search'}
                iconColor={'#f95a25'}
                iconSize={20}
                inputStyle={{color: '#fff'}}
                //iconWidth={40}
                inputPadding={16}
            />

            {/* <TextInput
                style={styles.inputStyle}
                onSubmitEditing={() => {
                    storeInstance.fetchCountries(value)
                }}
                underlineColor='transparent'
                left={
                    <TextInput.Icon
                        style={styles.inputIconStyle}
                        size={25}
                        color='#ff9f02'
                        name="magnify"
                    />}
                label="Find countries"
               // theme={{colors: {text: 'green', primary: 'yellow'}}}
                theme={{
                    colors: { primary: '#fff', text: '#fff', placeholder: '#fff' }
                }}
                value={value}
                onChangeText={text => setValue(text)}
            /> */}
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

