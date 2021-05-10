import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useTheme } from 'react-native-paper';
import { getRootStore } from '../../store';
import { makeStyles } from './rawStyles';

export const Maps = () => {
  const theme = useTheme();
  const styles = makeStyles(theme)
  const { countryStore } = getRootStore()

  const latitude = countryStore.latlng[0];
  const longitude = countryStore.latlng[1];

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.mapContainer}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 10,
        longitudeDelta: 10.05,
      }}
    >
      <Marker
        title={countryStore.name}
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      >
      </Marker>
    </MapView>
  )
}