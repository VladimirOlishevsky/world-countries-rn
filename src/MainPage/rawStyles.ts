import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    backgroundColor: 'rgba(255, 216, 125, 0.4)',
    height: height
  },
  inputStyle: {
    justifyContent: "center",
    backgroundColor: '#F1F7ED',
    fontSize: 20,
  },
  inputIconStyle: {
    marginTop: 10
  },
  inputContainer: {
    paddingTop: 60
  },

})