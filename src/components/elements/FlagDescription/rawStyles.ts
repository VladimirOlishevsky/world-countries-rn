import { StyleSheet } from "react-native";


export const makeStyles = (theme: ReactNativePaper.Theme)  => StyleSheet.create({
    flagDescriptionBlock: {
        alignItems: 'center',
        marginTop: theme.size,
        paddingTop: theme.size,
        paddingBottom: theme.size,
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderTopColor: theme.colors.orange,
        borderBottomColor: theme.colors.orange
    },
    flagDescriptionText: {
        textAlign: 'center',
        fontSize: theme.size,
        color: theme.colors.white
    },
});