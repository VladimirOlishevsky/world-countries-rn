import { StyleSheet } from "react-native";


export const makeStyles = (theme: ReactNativePaper.Theme)  => StyleSheet.create({
    mapButton: {
        backgroundColor: 'transparent',
        borderColor: theme.colors.orange,
        borderWidth: 1,
        color: theme.colors.white,
        marginTop: theme.size
    },
});