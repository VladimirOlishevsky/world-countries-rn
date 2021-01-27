import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    card: {
        paddingTop: 10,
        paddingBottom: 10
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        fontSize: 24,
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.63)',
        color: '#fff',
        textTransform: 'uppercase',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
});