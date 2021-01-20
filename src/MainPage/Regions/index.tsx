import React, { Fragment, useState } from "react";
import { Image, View, Text, ImageURISource } from "react-native"
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import Swiper from 'react-native-web-swiper';
import { TouchableOpacity } from "react-native-gesture-handler";

type ImageSourcePropType = React.ComponentProps<typeof Image>['source'];

export const Regions = observer(({ regionsArr }: any): JSX.Element => {
    return (
        <Fragment>
            {regionsArr.map((el: Record<string, string | ImageSourcePropType>, index: number) => {
                return (
                    <TouchableOpacity key={index} onPress={() => console.log('region')} style={{ flexDirection: 'row' }}>
                        <Image
                            resizeMode="stretch"
                            source={el.img}
                        />
                        <Text >
                            {el.title}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </Fragment>
    )
})

