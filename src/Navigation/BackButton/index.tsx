import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './rawStyles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const BackButton = () => {
    const navigation = useNavigation();
///fgf df kljl jfls jdjf sjdj
    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconStyle}
        >
            <Icon
                name="chevron-left"
                size={20}
                color="#ff9f0a" />
        </TouchableOpacity>

    );
}
