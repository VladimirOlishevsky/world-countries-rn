import "react-native-gesture-handler/jestSetup";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('mobx-react-lite', () => ({ observer: (comp: unknown) => comp }));

jest.mock('@react-navigation/native')
jest.mock('@react-navigation/stack')
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')

jest.mock('react-native-gesture-handler', () => { });

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigate,
      params: mockedNavigate
    }),
  };
});