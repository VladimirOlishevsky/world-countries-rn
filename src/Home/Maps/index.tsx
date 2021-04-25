import { observer } from 'mobx-react';
import { View } from 'native-base';
import React from 'react';
import { TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { getRootStore } from '../../store';
import { styles } from './rawStyles';

export const Maps = () => {

  const { countryStore } = getRootStore()

  const latitude = countryStore.latlng[0];
  const longitude = countryStore.latlng[1];

  console.log(latitude, longitude)

  return (
    <>
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
    {/* <View style={{ position: 'absolute', top: 10, width: '100%' }}>
    <TextInput
      style={{
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
      }}
      placeholder={'Search'}
      placeholderTextColor={'#666'}
    />
  </View> */}
  </>
  )
}