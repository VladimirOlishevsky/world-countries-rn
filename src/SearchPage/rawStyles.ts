import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 30,
    backgroundColor: '#1c1c1e',
    height: height
  },
})