import React, { Fragment } from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { observer } from 'mobx-react';
import { BackButton } from '../../Navigation/BackButton/index';
import { makeStyles } from './rawStyles';
import { getRootStore } from '../../../../store';
import { getFlagDescription } from '../../../../config/utils';
import { Button, useTheme } from 'react-native-paper';
import { button2map } from './constants';
import { ICurrencies, ILanguages } from 'store/types';
import { useNavigation } from '@react-navigation/native';
import { NotFound } from '../../../elements/NotFound';

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

type RootStackParamList = {
    route?: {
        params:
        {
            navigate: string,
            name: string
        }
    }
};


export const Country = observer(({ route }: RootStackParamList): JSX.Element => {
    const theme = useTheme();
    const styles = makeStyles(theme)

    const { countryStore } = getRootStore()
    const flagsDescription = getFlagDescription(countryStore.alpha2Code)

    const navigation = useNavigation()

    return (
        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton testId={'backButton'} page={route?.params.navigate === 'regional' ? 'RegionalCountries' : undefined} />
            </View>

            <ScrollView >
                {countryStore.name ?

                    <Fragment>
                        <View style={styles.content}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: countryStore.alpha2Code
                                        ? `https://flagcdn.com/w640/${countryStore.alpha2Code.toLowerCase()}.png`
                                        : `https://flagcdn.com/w640/${route?.params.name.toLowerCase()}.png`

                                }}
                            />
                            <Text style={styles.countryName}>
                                {countryStore.name}
                            </Text>
                        </View>

                        <View style={styles.flagDescriptionBlock}>
                            <Text style={styles.flagDescriptionText}>
                                {flagsDescription && (flagsDescription.cia_description || flagsDescription.jmpesc_description)}
                            </Text>
                        </View>
                        {getKeys(countryStore.store2Obj).map(el => (
                            <View key={el} style={styles.strings}>
                                <Text style={styles.keys} >
                                    {el}:
                             </Text>
                                {Array.isArray(countryStore.store2Obj[el])
                                    ?
                                    <View style={styles.column}>
                                        {(countryStore.store2Obj[el] as (ICurrencies | ILanguages)[]).map((el) => (
                                            <Text key={el.name} style={styles.values}>
                                                {el.name}
                                            </Text>
                                        ))}
                                    </View>
                                    :
                                    <Text key={el} style={styles.values}>
                                        {countryStore.store2Obj[el]}
                                    </Text>
                                }
                            </View>
                        ))}
                        <Button
                            mode='outlined'
                            style={styles.mapButton}
                            color='#fff'
                            onPress={() => navigation.navigate('Maps', { name: countryStore.name })}
                        >
                            {button2map}
                        </Button>
                    </Fragment>
                    :
                    <NotFound />
                }
            </ScrollView>
        </View>
    )
})

