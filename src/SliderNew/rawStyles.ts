import { StyleSheet } from "react-native";


export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    carouselBlock: {
        height: 300,
        justifyContent: 'center'
    },
    carouselContainer: {
        marginTop: theme.size * 2.5
    },
});