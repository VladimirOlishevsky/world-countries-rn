import React from 'react';
import {
    Text,
    Button
} from 'react-native';
import {Observer, observer } from "mobx-react";

import storeInstance from './store/store';


export const MainComponent = observer((): JSX.Element => {

    return (
        <>
            <Text>5555555555ff55555</Text>
            <Button
                title="Press me"

                onPress={() => {
                    storeInstance.fetchCountries('niger')
                    console.log(storeInstance.countriesInfo)
                    // return (
                    //     //storeInstance.clearItem(),
                    //     storeInstance.fetchCountries('egypt')
                        
                    // )
                }}
            />
             <Text>52255445</Text>
            <Text>{storeInstance.commentsCount}</Text>
             <Text>77777777777</Text>
        </>

    )
})
