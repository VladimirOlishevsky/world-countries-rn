import { StyleSheet } from "react-native";
import { ITEM_WIDTH, ITEM_HEIGHT } from "../constants";

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemLabel: {
        color: 'white',
        fontSize: theme.size,
        textAlign: 'center'
    },
});