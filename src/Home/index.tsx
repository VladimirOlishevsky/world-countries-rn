import {
    View,
    ScrollView,
} from 'react-native';
import React from 'react';
import { styles } from './rawStyles';
import { HOME_TITLES } from './config';
import { Button } from 'react-native-paper';
import { ContinentCards } from './ContinentCards/index';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';



export const Home = observer((): JSX.Element => {

    const navigation = useNavigation();

    return (
        <ScrollView style={{backgroundColor: '#1c1c1e'}}>
            <View style={styles.container}>
                <View
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <Button
                        style={styles.buttonCountries}
                        labelStyle={styles.buttonCountriesLabel}
                        color='#ff9f0a'
                        mode="contained"
                    // onPress={() => storeInstance.fetchCountries(value)}
                    >
                        {HOME_TITLES.countries}
                     </Button>
                    <Button
                        style={styles.buttonCapitals}
                        labelStyle={styles.buttonCapitalsLabel}
                        color='#fff'
                        mode="contained"
                    //onPress={() => storeInstance.fetchCountries(value)}
                    >
                        {HOME_TITLES.capitals}
                    </Button>
                </View>
                <Button
                    style={styles.buttonSearch}
                    labelStyle={styles.buttonSearchLabel}
                    color='#313133'
                    icon='magnify'
                    mode="contained"
                    onPress={() => navigation.navigate("SearchPage")}
                >
                    {HOME_TITLES.search}
                 </Button>

                 <ContinentCards />

                {/* <View>
                    {regionCards.map((el, index) => {
                     return ( 
                          <Card key={index}>
                            <Card.Cover source={el.img} />
                            <Title
                            style={{
                            position: 'absolute',
                            bottom: 0,
                            fontSize: 24,
                            width: '100%',
                            height: 60,
                            backgroundColor: 'rgba(0, 0, 0, 0.63)',
                            color: '#fff',
                            textTransform: 'uppercase',
                            textAlignVertical:'center',
                            textAlign: 'center'

                        }}
                            >{el.title}</Title>
                        </Card>
                        )
                    })}
                </View> */}
             
                {/* <View>
                    <View >
                        <Text style={styles.contentTitle}>
                            Some Facts about Africa
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.contentText}>
                            Africa is the second-largest continent in the world in both area and population.
                            It is an almost entirely isolated landmass with only a small land bridge in the northeast,
                            connecting the African Mainland with Western Asia.
                        </Text>
                    </View>
                </View>
                <Divider style={styles.divider} />
                <View>
                    <View>
                        <Text style={styles.contentTitle}>
                            How many countries are there in Africa?
                    </Text>
                    </View>
                    <View>
                        <Text style={styles.contentText}>
                            48 countries share the area of mainland Africa, plus six island nations are considered to be part of the continent.
                            All in all, there are 54 sovereign African countries and two disputed areas, namely Somaliland and Western Sahara
                            (see the list of African countries below).
                        </Text>
                    </View>
                </View>

                <Slider slides={slides}/> */}
            </View>
        </ScrollView>
    )
})

