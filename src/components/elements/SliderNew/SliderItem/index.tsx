import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { ISlideItem } from '../../../../config/types';
import { getRootStore } from '../../../../store';
import { makeStyles } from './rawStyles';


interface ISlideItemProps {
    item: ISlideItem,
    index: number
}


export const SlideItem = ({ item }: ISlideItemProps) => {

    const theme = useTheme();
    const styles = makeStyles(theme)

    const { countryStore } = getRootStore();
    const navigation = useNavigation();

    const actionByClick = (code: string) => {
        countryStore.fetchCountryByCode(code);
        navigation.navigate("Country", { name: code });
    }

    return (
        <TouchableOpacity
            testID={'slideItem'}
            onPress={() => actionByClick(item.iso_2cc)}
        >
            <View>
                <Image
                    style={styles.itemContainer}
                    source={{
                        uri:  item.img
                    }}
                />
                <Text style={styles.itemLabel}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );
}