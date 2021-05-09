import { StyleSheet } from "react-native";

export const makeStyles = (spacing: number) => StyleSheet.create({
  iconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: spacing * 2.5,
    height: spacing * 2.5,
  },
})
