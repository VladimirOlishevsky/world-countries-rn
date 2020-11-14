import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get('screen');
const ratio = win.width / 541;

export const styles = StyleSheet.create({
    imageContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    image: {
        //flex: 1,
        flexGrow: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: win.height,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center'
    },
    titleBlock: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: '10%'
    },
    title: {
        fontSize: 40,
        top: 0,
    }
});
