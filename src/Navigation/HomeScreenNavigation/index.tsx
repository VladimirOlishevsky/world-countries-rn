import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../Home';
import { RegionCountries } from '../../Home/RegionCountries';
import { SeparatePage } from '../../sepa';
import { Country } from './../../Home/Country/index';


const Stack = createStackNavigator();

export const HomeScreenNavigation = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="RegionCountries" component={RegionCountries} options={{ headerShown: false }}/>
        <Stack.Screen name="Country" component={Country} options={{ headerShown: false }}/>
        <Stack.Screen name="Test" component={SeparatePage} />
      </Stack.Navigator>
    );
  }