import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')

export const makeStyles = (theme: ReactNativePaper.Theme) => StyleSheet.create({
    scrollView: {
        backgroundColor: theme.colors.blackRussian,
        padding: theme.size * 1.5,
        paddingBottom: theme.size * 6.5,
        height: height
    },
    header: {
        marginTop:  theme.size * 1.5,
        marginBottom:  theme.size * 2.5,
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: '70%',
        height: theme.size * 7.5
    },
    countryName: {
        marginTop:  theme.size * 1.5,
        fontSize:  theme.size,
        color: theme.colors.white
    },
    keys: {
        fontSize:  theme.size, 
        color: theme.colors.orange,
        marginRight: theme.size * 0.5
    },
    values: {
        fontSize: theme.size, 
        color: theme.colors.white,
    },
    strings: {
        marginTop: theme.size * 1.5, 
        flexDirection: 'row',
    },
    column: {
        display: 'flex', 
        flexDirection: 'column'
    },
    flagDescriptionBlock: {
        alignItems: 'center',
        marginTop: theme.size,
        paddingTop: theme.size,
        paddingBottom: theme.size,
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderTopColor: theme.colors.orange,
        borderBottomColor: theme.colors.orange
    },
    flagDescriptionText: {
        textAlign: 'center',
        fontSize: theme.size,
        color: theme.colors.white
    },
    mapButton: {
        backgroundColor: 'transparent',
        borderColor: theme.colors.orange,
        borderWidth: 1,
        color: theme.colors.white,
        marginTop: theme.size
    },
});