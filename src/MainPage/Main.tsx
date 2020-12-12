import React, {useState} from 'react';
import {
    Text,
    Button,
    View,
    ScrollView
    //TextInput
} from 'react-native';
import {observer} from "mobx-react";
import storeInstance from '../store/store';
import {styles} from './rawStyles';
import {Isao, Akira, Sae} from 'react-native-textinput-effects';
import {Chip} from 'react-native-paper';
import {mostPopularCountries} from './ChipsBlockLayout/ChipsContent/constants';
import {TextInput} from 'react-native-paper';
import {ChipsBlockLayout} from "./ChipsBlockLayout";
import {ChipsTitle} from "./ChipsBlockLayout/ChipsTitle";
import {ChipsContent} from "./ChipsBlockLayout/ChipsContent";


export const MainComponent = observer((): JSX.Element => {

    const [value, setValue] = useState('')
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.containerTitle}>Find African Countries!</Text>

                <View style={{padding: 10}}>
                    <Akira
                        label={'First Name'}
                        // this is used as active and passive border color
                        borderColor={'#a5d1cc'}
                        inputPadding={16}
                        labelHeight={24}
                        labelStyle={{color: '#ac83c4'}}
                        //onChange={() => setValue()}

                    />
                    <TextInput
                        //style={styles.inputStyle}
                        // placeholder="Type here to translate!"
                        // onChangeText={text => setValue(text)}
                        //defaultValue={value}
                        focusable
                        showSoftInputOnFocus
                        label="Email"
                        value={value}
                        onChangeText={text => setValue(text)}
                    />
                    {/* <Text style={{ padding: 10, fontSize: 42 }}>
                    {value.split(' ').map((word) => word && '🍕').join(' ')}
                </Text> */}
                </View>
                {console.log(value)}
                <Button
                    title="Press me"
                    onPress={() => storeInstance.fetchCountries(value)}
                />

                <Text>557788871🍕</Text>
                <Text>{storeInstance.countriesInfo}</Text>

                <ChipsBlockLayout
                    title={<ChipsTitle title='Most Popular'/>}
                    chips={<ChipsContent/>}
                />

                {/*<View>*/}
                {/*    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Most Popular</Text>*/}
                {/*    <View style={{*/}
                {/*        flexDirection: 'row',*/}
                {/*        flexWrap: 'wrap',*/}
                {/*        alignItems: 'center',*/}
                {/*        justifyContent: 'flex-start',*/}
                {/*        marginTop: 10*/}
                {/*    }}>*/}
                {/*        {mostPopularCountries.map((el) =>*/}
                {/*            <Chip style={{marginRight: 10, marginTop: 5}} focusable*/}
                {/*                  onPress={() => storeInstance.fetchCountries(el)}>{el}</Chip>)}*/}
                {/*    </View>*/}
                {/*    /!*<Button*!/*/}
                {/*    /!*    style={{width: 100}}*!/*/}
                {/*    /!*    onPress={() => storeInstance.fetchCountries('egypt')}*!/*/}
                {/*    /!*    title='Egypt'/>*!/*/}


                {/*</View>*/}
            </View>
        </ScrollView>

    )
})
