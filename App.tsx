import React from 'react';
import {StyleSheet} from 'react-native';
import {Navigation} from './src/Navigation';
import storeInstance from './src/store/store';
import {Provider} from "mobx-react";
import {Provider as PaperProvider} from 'react-native-paper';

export default class App extends React.Component {
    render() {
        return (
            <Provider value={storeInstance}>
                <PaperProvider>
                    <Navigation/>
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
