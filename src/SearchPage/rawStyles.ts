import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get('screen')

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 0,
    padding: theme.size * 1.5,
    backgroundColor: theme.colors.blackRussian,
    height: height
  },
})