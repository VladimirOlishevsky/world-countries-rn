import React from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import { observer } from "mobx-react";
// import storeInstance from '../store/store';
import { makeStyles } from './rawStyles';
import { Button, useTheme } from 'react-native-paper';
import { InputArea } from './InputArea';
import { RegionalCards } from './Regions';

export const SearchScreen = observer(({ navigation }: any): JSX.Element => {

    const theme = useTheme()
    const styles = makeStyles(theme);

    return (

        <View style={styles.container}>
            <InputArea />
            <ScrollView>
                <RegionalCards />

                <Text>This is the home screen</Text>
                <Button
                    // onPress={() => navigation.navigate("Test", { names:  storeInstance.value })}
                >Go to About Screen</Button>
            </ScrollView>


        </View>


    )
})
