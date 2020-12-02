import React from 'react';
import {
    Text,
    Button
} from 'react-native';
import { observer } from "mobx-react";

import storeInstance from './store/store';


export const MainComponent = observer((): JSX.Element => {

    console.log(storeInstance.countriesInfo)
    return (
        <>
            <Text>5555555555ff55555</Text>
            <Button
                title="Press me"

                onPress={() => storeInstance.fetchCountries('south africa')}
            />
             <Text>557788871</Text>
            <Text>{storeInstance.countriesInfo}</Text>
             <Text>773338837</Text>
        </>

    )
})
