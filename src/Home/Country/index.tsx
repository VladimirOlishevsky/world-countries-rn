import React from 'react';
import { View, Image, Text, ScrollView } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import regionCardsStore from '../../store/Regions';
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
// import { styles } from './rawStyles';
import countryStore from '../../store/Country';


export const Country = observer(({ route }: any): JSX.Element => {
    

    return (
        <ScrollView >
            <View >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <BackButton />
                    <Text >
                        {countryStore.name}
                    </Text>
                </View>

               
            </View>
        </ScrollView>
    )
})

