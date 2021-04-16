import React from 'react';
import { observable } from 'mobx';
import MapView, { Marker } from 'react-native-maps';
import { Text, View } from 'react-native';

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
                //   onPress={() => handleNavigateToDetail(point.id)}
                title={description}
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                  }}
                >
                     {/* <MapView.Callout> */}
            {/* <View style={{height: 100, width: 200}}>
              <Text> Title </Text>
              <Text> Long Description    Even More Text</Text>
              <Text>Multine Description </Text>
            </View> */}
          {/* </MapView.Callout> */}
                     {/* <View style={{height: 20, width: 20}}>
                         <Text>{description} </Text>
                     </View> */}
                     
                </Marker>
            </MapView>
    )
}