import { StyleSheet } from "react-native";


export const makeStyles = (theme: ReactNativePaper.Theme)  => StyleSheet.create({
    image: {
        width: '70%',
        height: theme.size * 7.5
    },
    mapButton: {
        backgroundColor: 'transparent',
        borderColor: theme.colors.orange,
        borderWidth: 1,
        color: theme.colors.white,
        marginTop: theme.size
    },
    errorBlock: {
        alignItems: 'center'
    },
    countryName: {
        marginTop:  theme.size * 1.5,
        fontSize:  theme.size,
        color: theme.colors.white
    },
});