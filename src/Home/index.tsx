import {
    View,
    ScrollView,
    SafeAreaView,
    StatusBar
} from 'react-native';
import React from 'react';
import { makeStyles } from './rawStyles';
import { HOME_TITLES } from './config';
import { Button, useTheme } from 'react-native-paper';
import { observer } from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
import { SliderNew } from '../SliderNew';
import { ContinentCards } from './ContinentCards';


export const Home = observer((): JSX.Element => {

    const theme = useTheme();
    const styles = makeStyles(theme)

    const navigation = useNavigation();

    return (
        // <SafeAreaView>
            <View style={styles.scrollView}>
                <ScrollView>
                    <View
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <Button
                            style={styles.buttonCountries}
                            labelStyle={styles.buttonCountriesLabel}
                            color='#ff9f0a'
                            mode="contained"
                        >
                            {HOME_TITLES.countries}
                        </Button>
                        <Button
                            style={styles.buttonCapitals}
                            labelStyle={styles.buttonCapitalsLabel}
                            color='#fff'
                            mode="contained"
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
                    <SliderNew />

                    <ContinentCards />
                </ScrollView>
            </View>
        // </SafeAreaView>
    )
})

