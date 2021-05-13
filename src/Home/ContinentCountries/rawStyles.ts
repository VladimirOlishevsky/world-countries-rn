import { StyleSheet, Dimensions,StatusBar } from "react-native";
const { height } = Dimensions.get('screen')


export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({

    scrollView: {
        backgroundColor: theme.colors.blackRussian,
        paddingTop: StatusBar.currentHeight,
        // backgroundColor: theme.colors.blackRussian,
        padding: theme.size * 1.5,
        paddingBottom: theme.size * 6.5,
        height: height
        // marginTop: theme.size * 1.5,
        // paddingBottom: theme.size,
        // padding: theme.size * 1.5,
        // paddingBottom: StatusBar.currentHeight,
        // height: height
    },
    header: {
        // marginTop: theme.size * 1.5,
        marginBottom: theme.size,
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    view: {
        backgroundColor: theme.colors.blackRussian,
        padding: theme.size * 1.5,
        paddingBottom: theme.size * 7.5
    },
    imageWrapper: {
        flexDirection: 'row', 
        marginTop: theme.size * 0.5, 
        marginBottom: theme.size * 0.5,
        alignItems: 'center'
    },
    image: {
        width: theme.size * 5, 
        height: theme.size * 3.5
    },
    mainTitle: {
        fontSize: theme.size,
        color: theme.colors.orange,
        marginLeft: theme.size * 1.5
    },
    titles: {
        fontSize: theme.size,
        color: theme.colors.white,
        marginLeft: theme.size
    }
});
