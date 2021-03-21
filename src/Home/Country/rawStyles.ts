import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#1c1c1e',
        padding: 30,
        paddingBottom: 150,
        height: height
    },
    header: {
        marginTop: 30,
        marginBottom: 50,
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: '70%',
        height: 150
    },
    countryName: {
        marginTop: 30,
        fontSize: 20,
        color: '#fff'
    },
    keys: {
        fontSize: 20, 
        color: '#ff9f0a',
        marginRight: 10
    },
    values: {
        fontSize: 20, 
        color: '#fff',
    },
    strings: {
        marginTop: 30, 
        flexDirection: 'row',
    },
    column: {
        display: 'flex', 
        flexDirection: 'column'
    }
});