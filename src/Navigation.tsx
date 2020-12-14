import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainComponent } from './MainPage';
import { Home } from './Home';
import { observer } from "mobx-react";

const Tab = createBottomTabNavigator();

export const Navigation = observer(() => {
    return (
            <Tab.Navigator
                screenOptions={({ route }: any) => ({
                    tabBarIcon: ({ focused, color, size }: any) => {
                        let iconName;
                        if (route.name === 'Home') {
                            focused ? iconName = require('../assets/images/homeFocused.png')
                                : iconName = require('../assets/images/home.png');
                        } else if (route.name === 'Vicharan') {
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
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Vicharan" component={MainComponent} />
                <Tab.Screen name="Katha" component={Home} />
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
