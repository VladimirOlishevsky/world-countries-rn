import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { makeStyles } from './rawStyles';

import Icon from 'react-native-vector-icons/FontAwesome';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

interface IProps {
    page?: string,
    testId?: string
}

export const BackButton = ({
    page,
    testId
}: IProps) => {
    const navigation = useNavigation();
    const theme = useTheme();
    const styles = makeStyles(theme)

    return (
        <TouchableOpacity
            testID={testId}
            onPress={() => page ? navigation.navigate(page) : navigation.goBack()}
            style={styles.iconStyle}
        >
            <Icon
                name="chevron-left"
                size={theme.size}
                color="#ff9f0a" />
        </TouchableOpacity>

    );
}
