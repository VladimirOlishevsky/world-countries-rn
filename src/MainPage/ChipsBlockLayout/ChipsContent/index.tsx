import {Text, View} from "react-native";
import {rawStyles} from './rawStyles';
import React from "react";
import {observer} from "mobx-react";
import {mostPopularCountries} from "./constants";
import {Chip} from "react-native-paper";
import storeInstance from "../../../store/store";

interface Props {
    title: string
}

export const ChipsContent = observer((): JSX.Element => {
    return (
        <View style={rawStyles.chipsBlock}>
            {mostPopularCountries.map((el: string) =>
                <Chip style={rawStyles.chipsElement} focusable
                      onPress={() => storeInstance.fetchCountries(el)}>{el}</Chip>)}
        </View>

    )
})