import React, { Fragment } from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { observer } from 'mobx-react';
import { BackButton } from '../../../elements/BackButton/index';
import { makeStyles } from './rawStyles';
import { getRootStore } from '../../../../store';
import { useTheme } from 'react-native-paper';
import { ICurrencies, ILanguages } from 'store/types';
import { NotFound } from '../../../elements/NotFound';
import { FlagDescription } from 'components/elements/FlagDescription';
import { ButtonGoToMap } from 'components/elements/ButtonGoToMap';

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


export const CountryComponent = observer(({ route }: RootStackParamList): JSX.Element => {
    const theme = useTheme();
    const styles = makeStyles(theme)

    const { countryStore } = getRootStore()

    return (
        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton
                    page={route?.params.navigate === 'regional' ? 'RegionalCountries' : undefined} />
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
                        <FlagDescription alpha2Code={countryStore.alpha2Code} />
                        {countryStore.store2Obj && getKeys(countryStore.store2Obj).map(el => (
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
                        <ButtonGoToMap countryName={countryStore.name} />
                    </Fragment>
                    :
                    <NotFound />
                }
            </ScrollView>
        </View>
    )
})

