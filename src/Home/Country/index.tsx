import React from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { SvgUri } from 'react-native-svg';
import { TouchableOpacity } from "react-native-gesture-handler";
import regionCardsStore from '../../store/Regions';
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { styles } from './rawStyles';
import countryStore from '../../store/Country';


export const Country = observer(({ route }: any): JSX.Element => {


    return (
        <ScrollView style={styles.scrollView}>
            <View >
                <View style={styles.view}>
                    <BackButton />
                </View>

                <View style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                        style={{ width: 200, height: 150}}
                        source={{
                            uri: `https://flagcdn.com/w640/${route.params.name.toLowerCase()}.png`
                        }}
                    />
                    <Text >
                        {countryStore.name}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
})

