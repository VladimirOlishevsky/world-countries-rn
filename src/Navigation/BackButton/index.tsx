import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { makeStyles } from './rawStyles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';

interface IProps {
    page?: string
}

export const BackButton = ({
    page
}: IProps) => {
    const navigation = useNavigation();
    const { spacing } = useTheme();
    const styles = makeStyles(spacing)

    return (
        <TouchableOpacity
            onPress={() => page ? navigation.navigate(page) : navigation.goBack()}
            style={styles.iconStyle}
        >
            <Icon
                name="chevron-left"
                size={20}
                color="#ff9f0a" />
        </TouchableOpacity>

    );
}
