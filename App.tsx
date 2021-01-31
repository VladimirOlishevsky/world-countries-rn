import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { BottomNavigation } from './src/Navigation';
import storeInstance from './src/store/store';
import { Provider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SeparatePage } from './src/sepa';
import { SearchScreen } from './src/MainPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './src/Home/index';
//import { HomePage } from './src/Navigation/HomePage/index';

export const Stack = createStackNavigator();
export const Tab = createBottomTabNavigator();


export default class App extends React.Component {
    render() {
        return (
            <Provider value={storeInstance}>
                <PaperProvider>
                    <NavigationContainer>
                        <BottomNavigation />
                        {/* <Tab.Navigator
                            initialRouteName="Feed"
                            tabBarOptions={{
                                activeTintColor: '#42f44b',
                            }}
                            screenOptions={({ route }: any) => ({
                                tabBarIcon: ({ focused, color, size }: any) => {
                                    let iconName;
                                    if (route.name === 'HomePage') {
                                        focused ? iconName = require('./assets/images/homeFocused.png')
                                            : iconName = require('./assets/images/home.png');
                                    } else if (route.name === 'SearchPage') {
                                        focused ? iconName = require('./assets/images/vicharanFocused.png')
                                            : iconName = require('./assets/images/vicharan.png');
                                    } else {
                                        focused ? iconName = require('./assets/images/kathaFocused.png')
                                            : iconName = require('./assets/images/katha.png');
                                    }
                                    return <Image source={iconName}
                                        style={styles.bottomIcon}
                                    />;
                                },
                            })}
                            >
                            <Tab.Screen
                                name="HomePage"
                                component={Home}
                                options={{
                                    tabBarLabel: 'Home',
                                    // tabBarIcon: ({ color, size }) => (
                                    //     <MaterialCommunityIcons name="home" color={color} size={size} />
                                    // ),
                                }}
                            />
                            <Tab.Screen
                                name="SearchPage"
                                component={SearchScreen}
                                options={{
                                    tabBarLabel: 'Settings',
                                }}
                            />
                        </Tab.Navigator> */}
                        {/* <Stack.Navigator
                            headerMode="screen"
                            screenOptions={{
                                headerShown: false
                            }}
                            initialRouteName="Tabs"
                        >
                            <Stack.Screen name="Test" component={SeparatePage} /> */}
                        {/* <Stack.Screen name="Tabs" component={BottomNavigation} /> */}
                        {/* <Stack.Screen name="SearchScreen" component={SearchScreen} /> */}

                        {/* </Stack.Navigator> */}
                    </NavigationContainer>
                </PaperProvider>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    bottomIcon: {
        resizeMode: 'contain',
        width: 30,
        height: 30
    }
});