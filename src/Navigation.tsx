import * as React from 'react'
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainComponent } from './Main';
import { Home } from './Home/Home';
import { observer } from "mobx-react";



const Tab = createBottomTabNavigator();

export const Navigation = observer(() => {
    return (
        <NavigationContainer >
            <Tab.Navigator 
            //initialRouteName={Home}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
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
        </NavigationContainer>
    )
})



const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 30,
        height: 30
    },
});
