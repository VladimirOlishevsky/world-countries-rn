import React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from './src/Navigation';
import storeInstance from './src/store/store';
import { Provider } from "mobx-react";
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SeparatePage } from './src/sepa';

const Stack = createStackNavigator();


export default class App extends React.Component {
    render() {
        return (
            <Provider value={storeInstance}>
                <PaperProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Tabs">
                            <Stack.Screen name="Test" component={SeparatePage} />
                            <Stack.Screen name="Tabs" component={Navigation} />
                        </Stack.Navigator>
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
});