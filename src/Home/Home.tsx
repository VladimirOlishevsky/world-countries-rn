import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Image
} from 'react-native';

import React from 'react';
import { Typography, Box, Grid, Paper, Divider, withStyles } from '@material-ui/core'
import { styles } from './rawStyles';
import { title } from './config';


declare function require(path: string): any;
const themePic = require('../../assets/images/theme.jpg');

const pic1 = require('../../assets/images/1.jpg')
const pic2 = require('../../assets/images/2.jpg')
const pic3 = require('../../assets/images/3.jpg')
const pic4 = require('../../assets/images/4.jpg')

export const Home = () => {

    //const styles = useStyles();
    return (
        <ScrollView>
            <View
            style={styles.imageContainer}
            >
                <Image source={themePic}
                    style={styles.image}
                />
            </View>
            <View style={styles.titleBlock}>
                <Text> {title.toUpperCase()}</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <View >
                        <Text>
                            Some Facts about Africa
                    </Text>
                    </View>
                    <View>
                        <Text>
                            Africa is the second-largest continent in the world in both area and population.
                            It is an almost entirely isolated landmass with only a small land bridge in the northeast,
                            connecting the African Mainland with Western Asia.
                        </Text>
                    </View>
                </View>
                {/* <Divider style={styles.divider} /> */}
                <View>
                    <View>
                        <Text
                           
                        >
                            How many countries are there in Africa?
                    </Text>
                    </View>
                    <View>
                        <Text>
                            48 countries share the area of mainland Africa, plus six island nations are considered to be part of the continent.
                            All in all, there are 54 sovereign African countries and two disputed areas, namely Somaliland and Western Sahara
                            (see the list of African countries below).
                        </Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

