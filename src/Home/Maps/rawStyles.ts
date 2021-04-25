import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#1c1c1e',
        padding: 30,
        paddingBottom: 150,
        height: height
    },
    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
      },
});