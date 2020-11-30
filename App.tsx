import React, { useState, useEffect, createContext, Fragment } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Navigation } from './src/Navigation';
import storeInstance from './src/store/store';
import { Provider } from "mobx-react";

export default class App extends React.Component {
  render() {
    return (
      <Provider {...storeInstance}>
         <Navigation />
        {/* <SafeAreaView style={styles.safeArea}>
          <Navigator style={styles.navigator} />
        </SafeAreaView> */}
      </Provider>
    );
  }
}



// export default function App() {
//   return (
//     <Fragment>
//       <Navigation />
//     </Fragment>
//   );
// }

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
