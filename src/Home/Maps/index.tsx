import React from 'react';
import { observable } from 'mobx';
import MapView from 'react-native-maps';

export const Maps = () => {
    return (
        <MapView
        style={{width: 200, height: 200}}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    )
}