import {Text, View} from "react-native";
import {mostPopularCountries} from "./ChipsContent/constants";
import {Chip} from "react-native-paper";
import storeInstance from "../../store/store";
import React from "react";
import {observer} from "mobx-react";
import {ChipsTitle} from "./ChipsTitle";
import {ChipsContent} from "./ChipsContent";

interface Props {
    title: React.ReactNode,
    chips: React.ReactNode
}

export const ChipsBlockLayout = observer(({title, chips}: Props): JSX.Element => {
    console.log(title)
    return (
        <View>
            {title}
            {chips}
            {/*<ChipsTitle title='Most Popular'/>*/}
            {/*<ChipsContent/>*/}
        </View>
    )
})

