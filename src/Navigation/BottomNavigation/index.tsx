import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from '../../SearchPage';
import { Home } from '../../Home';
import { observer } from "mobx-react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreenNavigation } from '../HomeScreenNavigation/index';
import { SearchScreenNavigation } from '../SearchScreenNavigation';
import { Maps } from '../../Home/Maps';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
                        // else if (route.name === 'Maps') {
                        //     focused ? iconName = require('../../assets/images/vicharanFocused.png')
                        //         : iconName = require('../../assets/images/vicharan.png');
                        else if(route.name === 'SearchPage') {
                            focused ? iconName = require('../../../assets/images/kathaFocused.png')
                                : iconName = require('../../../assets/images/katha.png');
                        } 
                        // else {
                        //     iconName = require('../../assets/images/search.png')
                        // }
                        return <Image source={iconName}
                            style={styles.image}
                        />;
                    },
                })}
            >
                <Tab.Screen name="HomePage" component={HomeScreenNavigation} />
                <Tab.Screen name="SearchPage" component={SearchScreenNavigation} />
                {/* <Tab.Screen name="Maps" component={Maps} /> */}
                {/* <Tab.Screen name="SettingsPage" component={Home} /> */}
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
