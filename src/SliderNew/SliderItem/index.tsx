import React from 'react';
import { Text, View, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { styles } from '../rawStyles';

export const SlideItem = ({ item, index }: any) => {

    // const theme = useTheme();
    // const styles = makeStyles(theme)

    return (
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemContainer}
                source={{
                    uri: item.img
                }}
            />
            <Text style={styles.itemLabel}>{item.title}</Text>
        </View>
    );
}