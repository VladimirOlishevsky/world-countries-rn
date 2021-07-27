import { StyleSheet } from "react-native";

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing * 2.5,
    height: theme.spacing * 2.5,
  },
})
