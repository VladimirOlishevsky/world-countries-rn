import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';

import React from 'react';
import { Typography } from '@material-ui/core'
import { styles } from './rawStyles';
import { title } from './config';

declare function require(path: string): any;
const themePic = require('../../assets/images/theme.jpg');

export const Home = () => {
    return (
        <ScrollView>
            <View
                style={styles.imageContainer}>
                <Image source={themePic}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleBlock}>
                <Text style={styles.title} > {title.toUpperCase()}</Text>
            </View>



            <View>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex sed quidem quisquam iusto neque, placeat saepe omnis. Maxime, ea libero porro ipsam quaerat veritatis magni molestias sequi veniam inventore.
                </Text>
            </View>
        </ScrollView>
    )
}

