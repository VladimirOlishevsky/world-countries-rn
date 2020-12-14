import { Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react";



export const SeparatePage = observer(({route}: any): JSX.Element => {
    return (
        <View>
            <Text>
                props between components ----------
                {route.params.names}
            </Text>
        </View>

    )
})