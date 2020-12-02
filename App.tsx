import React from 'react';
import { StyleSheet } from 'react-native';
import { Navigation } from './src/Navigation';
import storeInstance from './src/store/store';
import { Provider } from "mobx-react";

export default class App extends React.Component {
  render() {
    return (
      <Provider value={storeInstance}>
         <Navigation />
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
