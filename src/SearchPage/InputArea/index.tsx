import React, { useState } from "react";
import { View } from "react-native"
import { Button } from 'react-native-paper';
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import { Fumi } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { getRootStore } from "../../store";


export const InputArea = observer((): JSX.Element => {
    const { countryStore } = getRootStore()
    const [value, setValue] = useState('');
    const navigation = useNavigation();

    const actionByClick = (value: string) => {
        countryStore.fetchCountryByName(value);
        navigation.navigate("Country", { name: value });
        setValue('')
    }

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
                inputPadding={16}
                onChangeText={(text) => setValue(text)}
                value={value}
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
                onPress={() => value ? actionByClick(value) : console.log('33333')}>
                Search
             </Button>
        </View>)
})

