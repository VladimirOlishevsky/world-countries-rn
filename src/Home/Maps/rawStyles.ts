import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    scrollView: {
        backgroundColor: theme.colors.blackRussian,
        padding: theme.size * 1.5,
        paddingBottom: theme.size * 7.5,
        height: height
    },
    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: theme.size * 0.5,
        overflow: 'hidden',
        marginTop: theme.spacing * 2,
      },
});