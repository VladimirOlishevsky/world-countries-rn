import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { create, act } from 'react-test-renderer';
import { Country } from '..';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')
jest.mock('react-native-gesture-handler', () => {});
jest.mock('@react-navigation/stack', () => { return {BaseButton: ()=>'whatever'} });

// jest.mock("NativeModules", () => ({
//   UIManager: {
//     RCTView: () => ({
//       directEventTypes: {}
//     })
//   },
//   KeyboardObserver: {},
//   RNGestureHandlerModule: {
//     attachGestureHandler: jest.fn(),
//     createGestureHandler: jest.fn(),
//     dropGestureHandler: jest.fn(),
//     updateGestureHandler: jest.fn(),
//     State: {},
//     Directions: {}
//   }
// }))



const Stack = createStackNavigator();
const MockedNavigator = ({ component, params = {} }: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


describe("App", () => {
  it('Country test', async () => {
    let tree;
   await act(async () => {
      tree = create(
        <MockedNavigator component={Country} />
      )
    })
    expect(tree).toMatchSnapshot();
  });
})