import { StyleSheet, Dimensions } from "react-native";
import { makeStyles } from '@material-ui/core/styles';

const win = Dimensions.get('screen');

export const styles = StyleSheet.create({
    image: {
        flexGrow: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: win.height,
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
        top: '15%'
    },
    title: {
        fontSize: 40,
        top: 0,
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    }
});

// export const useStyles = makeStyles((theme) => ({
//     container: {
//         flex: 1,
//         flexDirection: "column",
//         justifyContent: 'center',
//         padding: 30,
//         backgroundColor: 'rgba(236, 161, 29, 0.4)'
//     },
//     root: {
//         flexGrow: 1,
//     },
//     imageContainer: {
//         flexGrow: 1,
//         justifyContent: "center",
//         alignItems: "center",

//     },
//     titleBlock: {
//         position: 'absolute',
//         width: '100%',
//         textAlign: 'center',
//         top: '15%'
//     },
//     title: {
//         fontSize: 40,
//         top: 0,
//     },
//     divider: {
//         marginTop: 20,
//         marginBottom: 20
//     }
// }));