import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')


export const styles = StyleSheet.create({

    scrollView: {
        backgroundColor: '#1c1c1e',
        padding: 30,
        paddingBottom: 100,
        height: height
    },
    header: {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    view: {
        backgroundColor: '#1c1c1e',
        padding: 30,
        paddingBottom: 150
    },
    headerBlock: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20
    },
    imageWrapper: {
        flexDirection: 'row', 
        marginTop: 10, 
        marginBottom: 10,
        alignItems: 'center'
    },
    image: {
        width: 100, 
        height: 70
    },
    mainTitle: {
        fontSize: 20,
        color: '#ff9f0a',
        marginLeft: 30
    },
    titles: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 20
    }
});
