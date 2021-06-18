import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { observer } from "mobx-react";
import { HomeScreenNavigation } from '../HomeScreenNavigation/index';
import { SearchScreenNavigation } from '../SearchScreenNavigation';
import { makeStyles } from './rawStyles';
import { useTheme } from 'react-native-paper';

const Tab = createBottomTabNavigator();

export const MainNavigation = observer(() => {

    const theme = useTheme()
    const styles = makeStyles(theme);
    
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                tabBarIcon: ({ focused, color, size }: any) => {
                    let iconName;
                    if (route.name === 'HomePage') {
                        focused ? iconName = require('../../../static/images/vicharanFocused.png')
                            : iconName = require('../../../static/images/vicharan.png');
                    }
                    else if (route.name === 'SearchPage') {
                        focused ? iconName = require('../../../static/images/kathaFocused.png')
                            : iconName = require('../../../static/images/katha.png');
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


