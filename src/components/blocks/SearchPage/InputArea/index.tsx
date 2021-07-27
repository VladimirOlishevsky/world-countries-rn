import React, { ComponentClass, useState } from "react";
import { View } from "react-native"
import { Button, useTheme } from 'react-native-paper';
import { makeStyles } from './rawStyles';
import { observer } from 'mobx-react';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { getRootStore } from "../../../../store";
import { buttonTitle, inputLabel } from "./constants";


export const InputArea = observer((): JSX.Element => {
    const theme = useTheme()
    const styles = makeStyles(theme);
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
                label={inputLabel}
                // iconClass={() => aaa()}
                iconClass={Icon}
                iconName={'search'}
                iconColor={'#f95a25'}
                iconSize={20}
                inputStyle={styles.inputTextStyle}
                inputPadding={16}
                onChangeText={(text) => setValue(text)}
                value={value}
            />

            <Button
                style={styles.button}
                color={theme.colors.darkCerulean}
                icon='magnify'
                mode="contained"
                onPress={() => value ? actionByClick(value) : console.log('33333')}>
                {buttonTitle}
            </Button>
        </View>)
})

