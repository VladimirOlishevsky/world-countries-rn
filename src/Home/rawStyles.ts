import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    scrollView: {
        backgroundColor: theme.colors.blackRussian
    },
    image: {
        flexGrow: 1,
        alignSelf: 'stretch',
        width: width,
        height: height,
    },
    container: {
        height: height,
        flexDirection: "column",
        paddingTop: theme.size * 3,
        marginBottom: theme.size * 3.5,
        padding: theme.size * 1.5,
    },
    buttonCountries: {
        flex: 0.5,
        borderRadius: theme.spacing * 2,
        marginRight: 5,
        color: 'red'
    },
    buttonCapitals: {
        flex: 0.5,
        borderRadius: theme.spacing * 2,
        marginLeft: 5
    },
    buttonCountriesLabel: {
        color: theme.colors.white
    },
    buttonCapitalsLabel: {
        color: theme.colors.blackRussian
    },
    buttonSearchLabel: {
        color: theme.colors.orange
    },
    buttonSearch: {
        marginTop: theme.size * 1.5
    },
    root: {
        flexGrow: 1,
    },
    imageContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    titleBlock: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: '20%',
    },
    title: {
        fontSize: 40,
        top: 0,
        textAlign: 'center',
    },
    contentTitle: {
        fontSize: 30,
        top: 0,
        textAlign: 'center',
    },
    contentText: {
        fontSize: 20,
        top: 0,
        textAlign: 'center',
        marginTop: 20
    },
    contentBlock: {
        marginTop: 20
    },
    divider: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#000'
    }
});
