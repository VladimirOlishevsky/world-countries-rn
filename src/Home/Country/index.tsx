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
                <View style={styles.header}>
                    <BackButton />
                </View>

                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://flagcdn.com/w640/${route.params.name.toLowerCase()}.png`
                        }}
                    />
                    <Text style={styles.countryName}>
                        {countryStore.name}
                    </Text>
                </View>
                <View style={{marginTop: 50, flexDirection: 'row', }}>
                    <Text style={{fontSize: 20, color: '#ff9f0a'}} >
                        Capital: 
                    </Text>
                    <Text style={{fontSize: 20, color: '#fff'}}>
                        {countryStore.capital}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
})

