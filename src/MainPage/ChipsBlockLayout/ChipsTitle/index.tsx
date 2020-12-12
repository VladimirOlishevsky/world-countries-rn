import {Text} from "react-native";
import {rawStyles} from './rawStyles';
import React from "react";
import {observer} from "mobx-react";

interface Props {
    title: string
}

export const ChipsTitle = observer((title: Props): JSX.Element => {
    return (
        <Text
            style={rawStyles.title}>
            {title}
        </Text>

    )
})