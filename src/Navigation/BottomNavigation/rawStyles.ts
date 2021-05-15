import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: theme.size * 1.5,
        height: theme.size * 1.5
    },
});