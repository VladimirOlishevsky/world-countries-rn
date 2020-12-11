import React, { useState } from 'react';
import {
    Text,
    Button,
    View,
    TextInput
} from 'react-native';
import { observer } from "mobx-react";
import storeInstance from '../store/store';
import { styles } from './rawStyles';
import { Isao, Akira, Sae } from 'react-native-textinput-effects';



export const MainComponent = observer((): JSX.Element => {

    const [value, setValue] = useState('')

    console.log(value)
    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Find African Countries!</Text>
            {/* <Akira
                label={'First Name'}
                // this is used as active and passive border color
                borderColor={'#a5d1cc'}
                inputPadding={16}
                labelHeight={24}
                labelStyle={{ color: '#ac83c4' }}
                onChange={() => setValue }
               // value={value}
                
            /> */}
            <View style={{ padding: 10 }}>
                 <Akira
                label={'First Name'}
                // this is used as active and passive border color
                borderColor={'#a5d1cc'}
                inputPadding={16}
                labelHeight={24}
                labelStyle={{ color: '#ac83c4' }}
                onChange={(e) => setValue(e.nativeEvent.text)}
               // value={value}
                
            />
                {/* <TextInput
                    style={{ height: 40 }}
                    placeholder="Type here to translate!"
                    onChangeText={text => setValue(text)}
                    defaultValue={value}
                /> */}
                {/* <Text style={{ padding: 10, fontSize: 42 }}>
                    {value.split(' ').map((word) => word && '🍕').join(' ')}
                </Text> */}
                </View>
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
