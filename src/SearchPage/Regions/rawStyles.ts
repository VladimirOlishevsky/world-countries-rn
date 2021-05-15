import { StyleSheet } from "react-native";


export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
  container: {
    marginTop: theme.size * 1.5
  },
  card: {
    marginTop: theme.size * 1.5
  },
  titleBlock: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    color: theme.colors.white
  }
})