import React from 'react';
import {
    Text,
    Button,
    View,
    TextInput
} from 'react-native';
import { observer } from "mobx-react";
import storeInstance from '../store/store';
import { styles } from './rawStyles';
import { Isao, Akira } from 'react-native-textinput-effects';



export const MainComponent = observer((): JSX.Element => {

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Find African Countries!</Text>
            <Akira
                label={'First Name'}
                // this is used as active and passive border color
                borderColor={'#a5d1cc'}
                inputPadding={16}
                labelHeight={24}
                labelStyle={{ color: '#ac83c4' }}
            />
            <Button
                title="Press me"

                onPress={() => storeInstance.fetchCountries('south africa')}
            />
            <Text>557788871🍕</Text>
            <Text>{storeInstance.countriesInfo}</Text>
            <Text>773338837</Text>
        </View>

    )
})
