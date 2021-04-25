import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Maps } from '../../Home/Maps';


const Stack = createStackNavigator();

export const MapScreenNavigation = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Maps" component={Maps} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
  }
