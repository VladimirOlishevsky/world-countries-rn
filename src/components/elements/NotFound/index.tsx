import { useNavigation } from '@react-navigation/native';
import { notFoundPicture } from '../../../config/config';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { go2search, notFound } from './constants';
import { makeStyles } from './rawStyles';


export const NotFound = (): JSX.Element => {

    const theme = useTheme();
    const styles = makeStyles(theme);
    const navigation = useNavigation()

    return (
        <View style={styles.errorBlock}>
        <Image
            style={styles.image}
            source={{ uri: notFoundPicture }}
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
    </View>
    )
};