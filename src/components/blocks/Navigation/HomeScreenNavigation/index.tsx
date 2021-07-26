import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../../Home';
import { ContinentCountries } from '../../Home/ContinentCountries';
import { SeparatePage } from '../../../../sepa';
import { CountryComponent } from '../../Home/Country/index';
import { Maps } from '../../Home/Maps';
import { useTheme } from 'react-native-paper';

const Stack = createStackNavigator();

export const HomeScreenNavigation = () => {

  const theme = useTheme()

  return (
    <Stack.Navigator >
      <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ContinentCountries" component={ContinentCountries} options={{ headerShown: false }} />
      <Stack.Screen name="Country" component={CountryComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Maps" component={Maps} options={{
        title: 'Map',
        headerStyle: {
          backgroundColor: theme.colors.orange,
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />
      <Stack.Screen name="Test" component={SeparatePage} />
    </Stack.Navigator>
  );
}
