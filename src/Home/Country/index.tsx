import React, { Fragment } from 'react';
import { View, Image, Text, ScrollView } from "react-native";
import { observer } from 'mobx-react';
import { BackButton } from './../../Navigation/BackButton/index';
import { makeStyles } from './rawStyles';
import { getRootStore } from '../../store';
import { getFlagDescription } from '../../config/utils';
import { useNavigation } from '@react-navigation/native';
import { Button, useTheme } from 'react-native-paper';
import { button2map, go2search, notFound } from './constants';
import { notFoundPicture } from '../../config/config';

export const Country = observer(({ route }: any): JSX.Element => {

    const theme = useTheme();
    const styles = makeStyles(theme)

    const navigation = useNavigation();
    const { countryStore } = getRootStore()
    const flagsDescription = getFlagDescription(countryStore.alpha2Code)

    return (
        <View style={styles.scrollView}>
            <View style={styles.header}>
                <BackButton page={route.params.navigate === 'regional' ? 'RegionalCountries' : ''} />
            </View>

            <ScrollView >
                {countryStore.errorMessage ?
                    <View style={styles.errorBlock}>
                        <Image
                            style={styles.image}
                            source={notFoundPicture}
                        />
                        <Text style={styles.countryName}>
                            {notFound}
                        </Text>
                        <Button
                            mode='outlined'
                            style={styles.mapButton}
                            color='#fff'
                            onPress={() => navigation.navigate("SearchPage")}
                        >
                            {go2search}
                        </Button>
                    </View> :
                    <Fragment>
                        <View style={styles.content}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: countryStore.alpha2Code
                                        ? `https://flagcdn.com/w640/${countryStore.alpha2Code.toLowerCase()}.png`
                                        : `https://flagcdn.com/w640/${route.params.name.toLowerCase()}.png`

                                }}
                            />
                            <Text style={styles.countryName}>
                                {countryStore.name}
                            </Text>
                        </View>

                        <View style={styles.flagDescriptionBlock}>
                            <Text style={styles.flagDescriptionText}>
                                {flagsDescription?.cia_description || flagsDescription?.jmpesc_description}
                            </Text>
                        </View>
                        {Object.values(countryStore.store2Obj).map((el, index) => (
                            <View key={index} style={styles.strings}>
                                <Text style={styles.keys} >
                                    {countryStore.getKeyByValue(countryStore.store2Obj, el)}:
                                </Text>
                                {Array.isArray(el)
                                    ? (
                                        <View style={styles.column}>
                                            {el.map((el: any) => (
                                                <Text key={el.name} style={styles.values}>
                                                    {el.name}
                                                </Text>
                                            ))}
                                        </View>
                                    )
                                    :
                                    <Text key={el} style={styles.values}>
                                        {el}
                                    </Text>
                                }
                            </View>
                        )
                        )}
                        <Button
                            mode='outlined'
                            style={styles.mapButton}
                            color='#fff'
                            onPress={() => navigation.navigate('Maps', { name: countryStore.name })}
                        >
                            {button2map}
                        </Button>
                    </Fragment>
                }
            </ScrollView>
        </View>
    )
})

