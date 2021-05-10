import { Dimensions, StyleSheet } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
export const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

export const styles = StyleSheet.create({
    carouselBlock: {
        height: 300
    },
    carouselContainer: {
        marginTop: 50
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemLabel: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
});