jest.mock('mobx-react-lite', () => ({ observer: (comp: unknown) => comp }));

jest.mock('@react-navigation/native')
jest.mock('@react-navigation/stack')
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')


// jest.mock('@react-navigation/native', () => {
//   const moduleMock = jest.requireActual('@react-navigation/native');

//   return {
//     ...moduleMock,
//     BrowserRouter: 'BrowserRouter',
//     Route: 'Route',
//     Link: 'Link',
//     Switch: 'Switch',
//     NavLink: 'NavLink',
//     Redirect: 'Redirect',
//     useParams: jest.fn(),
//     useHistory: () => ({
//       push: jest.fn(),
//       listen: jest.fn(),
//     }),
//   }
// });