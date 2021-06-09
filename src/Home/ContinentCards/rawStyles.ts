import { StyleSheet } from "react-native";

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    container: {
        marginTop: theme.size * 1.5,
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        fontSize: theme.spacing * 3,
        width: '100%',
        height: theme.size * 3,
        backgroundColor: 'rgba(0, 0, 0, 0.63)',
        color: theme.colors.white,
        textTransform: 'uppercase',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
});