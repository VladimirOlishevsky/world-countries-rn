import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    image: {
        flexGrow: 1,
        alignSelf: 'stretch',
        width: width,
        height: height,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        padding: 30,
        backgroundColor: 'rgba(236, 161, 29, 0.4)'
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
