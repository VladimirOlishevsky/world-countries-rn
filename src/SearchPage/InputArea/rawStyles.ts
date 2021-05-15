import { StyleSheet } from "react-native";
import { inputLabel } from "./constants";

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  inputStyle: {
    justifyContent: "center",
    backgroundColor: theme.colors.tunaGrey,
    fontSize: theme.size,
    borderTopStartRadius: theme.size * 1.5,
    borderTopEndRadius: theme.size * 1.5,
    borderBottomStartRadius: theme.size * 1.5,
    borderBottomEndRadius: theme.size * 1.5,
  },
  inputIconStyle: {
    marginTop: theme.size * 0.5,
    color: theme.colors.grey
  },
  inputContainer: {
    paddingTop: theme.size * 3,
    paddingBottom: theme.size * 2.5,
  },
  button: {
     marginTop: theme.size
  },
  inputTextStyle: {
    color: theme.colors.white
  }
})