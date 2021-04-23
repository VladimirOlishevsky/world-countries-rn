import React from 'react';
import MapView, { Marker } from 'react-native-maps';

interface IProps {
  latitude: number,
  longitude: number,
  description: string
}

export const Maps = ({
  latitude, longitude, description
}: IProps) => {
  return (
    <MapView
      style={{ width: 200, height: 200 }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 10,
        longitudeDelta: 10.05,
      }}
    >
      <Marker
        title={description}
        coordinate={{
          latitude: latitude,
          longitude: longitude,
        }}
      >
      </Marker>
    </MapView>
  )
}