import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../Home';
import { ContinentCountries } from '../../Home/ContinentCountries';
import { SeparatePage } from '../../sepa';
import { Country } from './../../Home/Country/index';
import { Maps } from '../../Home/Maps';


const Stack = createStackNavigator();

export const HomeScreenNavigation = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="ContinentCountries" component={ContinentCountries} options={{ headerShown: false }}/>
        <Stack.Screen name="Country" component={Country} options={{ headerShown: false }}/>
        <Stack.Screen name="Maps" component={Maps} options={{
          title: 'Map',
          headerStyle: {
            backgroundColor: '#ff9f0a',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Test" component={SeparatePage} />
      </Stack.Navigator>
    );
  }
