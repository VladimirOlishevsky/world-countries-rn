// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { MainComponent } from './MainPage/index';
// import { Home } from './Home/index';
// import { SeparatePage } from './sepa';

// function HomeScreen({ navigation }: any) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export const AppNavig = () => {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="About" component={SeparatePage} />
//         <Stack.Screen name="Details" component={MainComponent} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// //export default App;