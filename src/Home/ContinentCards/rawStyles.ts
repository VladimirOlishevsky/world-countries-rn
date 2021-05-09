import { StyleSheet } from "react-native";

interface IProps {
    spacing: number, 
    size: number,
    white: string
}

export const makeStyles = ({
    spacing, 
    size, 
    white
}: IProps) => StyleSheet.create({
    container: {
        marginTop: size * 1.5
    },
    cardTitle: {
        position: 'absolute',
        bottom: 0,
        fontSize: spacing * 3,
        width: '100%',
        height: size * 3,
        backgroundColor: 'rgba(0, 0, 0, 0.63)',
        color: white,
        textTransform: 'uppercase',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
});