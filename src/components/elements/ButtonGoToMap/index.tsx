
import React from 'react';
import { View, Text } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { makeStyles } from './rawStyles';
import { useNavigation } from '@react-navigation/native';
import { button2map } from './constants';

interface IButtonGoToMap {
    countryName: string
}

export const ButtonGoToMap = ({
    countryName
}: IButtonGoToMap): JSX.Element => {

    const navigation = useNavigation();
    const theme = useTheme();
    const styles = makeStyles(theme);
    
    return (
        <Button
            mode='outlined'
            style={styles.mapButton}
            color='#fff'
            onPress={() => navigation.navigate('Maps', { name: countryName })}
        >
            {button2map}
        </Button>
    )
};