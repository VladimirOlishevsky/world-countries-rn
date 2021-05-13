import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import { HomeScreenNavigation } from '../HomeScreenNavigation/index';
import { SearchScreenNavigation } from '../SearchScreenNavigation';

const Tab = createBottomTabNavigator();

export const MainNavigation = observer(() => {
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                tabBarIcon: ({ focused, color, size }: any) => {
                    let iconName;
                    if (route.name === 'HomePage') {
                        focused ? iconName = require('../../../assets/images/vicharanFocused.png')
                            : iconName = require('../../../assets/images/vicharan.png');
                    }
                    else if (route.name === 'SearchPage') {
                        focused ? iconName = require('../../../assets/images/kathaFocused.png')
                            : iconName = require('../../../assets/images/katha.png');
                    }
                    return <Image source={iconName}
                        style={styles.image}
                    />;
                },
            })}
        >
            <Tab.Screen name="HomePage" component={HomeScreenNavigation} />
            <Tab.Screen name="SearchPage" component={SearchScreenNavigation} />
        </Tab.Navigator>
    )
})

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 30,
        height: 30
    },
});
