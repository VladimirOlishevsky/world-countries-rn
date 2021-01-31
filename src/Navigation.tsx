import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchScreen } from './MainPage';
import { Home } from './Home';
import { observer } from "mobx-react";

const Tab = createBottomTabNavigator();

export const BottomNavigation = observer(() => {
    return (
            <Tab.Navigator
                screenOptions={({ route }: any) => ({
                    tabBarIcon: ({ focused, color, size }: any) => {
                        let iconName;
                        if (route.name === 'HomePage') {
                            focused ? iconName = require('../assets/images/homeFocused.png')
                                : iconName = require('../assets/images/home.png');
                        } else if (route.name === 'SearchPage') {
                            focused ? iconName = require('../assets/images/vicharanFocused.png')
                                : iconName = require('../assets/images/vicharan.png');
                        } else {
                            focused ? iconName = require('../assets/images/kathaFocused.png')
                                : iconName = require('../assets/images/katha.png');
                        }
                        return <Image source={iconName}
                            style={styles.image}
                        />;
                    },
                })}
            >
                <Tab.Screen name="HomePage" component={Home} />
                <Tab.Screen name="SearchPage" component={SearchScreen} />
                <Tab.Screen name="SettingsPage" component={Home} />
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
