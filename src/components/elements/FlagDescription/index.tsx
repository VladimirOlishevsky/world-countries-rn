
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { makeStyles } from './rawStyles';
import { getFlagDescription } from '../../../config/utils';

interface IFlagDescription {
    alpha2Code: string
}

export const FlagDescription = ({
    alpha2Code
}: IFlagDescription): JSX.Element => {

    const theme = useTheme();
    const styles = makeStyles(theme)
    const flagsDescription = getFlagDescription(alpha2Code)
    return (
        <View style={styles.flagDescriptionBlock}>
            <Text style={styles.flagDescriptionText}>
                {flagsDescription && (flagsDescription.cia_description || flagsDescription.jmpesc_description)}
            </Text>
        </View>
    )
};