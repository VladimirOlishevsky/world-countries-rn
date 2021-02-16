import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

export const BackButton = () => {
    const navigation = useNavigation();

    return (
        <IconButton
            icon="chevron-left"
            color='#ff9f0a'
            size={40}
            onPress={() => navigation.goBack()}
        />
    );
}
