import React, { useState, useEffect, createContext, Fragment } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Navigation } from './src/Navigation';


export default function App() {
  return (
    <Fragment>
      <Navigation />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
