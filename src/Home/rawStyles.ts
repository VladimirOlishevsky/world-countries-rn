import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    image: {
        flexGrow: 1,
        alignSelf: 'stretch',
        width: width,
        height: height,
    },
    container: {
        //flex: 1,
        height: height,
        flexDirection: "column",
        paddingTop: 60,
        marginBottom: 150,
        //justifyContent: 'center',
        padding: 30,
        // backgroundColor: '#1c1c1e'
        //backgroundColor: 'rgba(236, 161, 29, 0.4)'
    },
    buttonCountries: {
        flex: 0.5, 
        borderRadius: 16,
        marginRight: 5,
        color: 'red'
    },
    buttonCapitals: {
        flex: 0.5, 
        borderRadius: 16,
        marginLeft: 5
    },
    buttonCountriesLabel: {
        color: '#fff'
    },
    buttonCapitalsLabel: {
        color: '#000'
    },
    buttonSearchLabel: {
        color: '#ff9f0a'
    },
    buttonSearch: {
        marginTop: 30
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
