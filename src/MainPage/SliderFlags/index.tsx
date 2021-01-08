import React, { useState } from "react";
import { Image, View, Text } from "react-native"
import { styles } from './rawStyles';
import { observer } from 'mobx-react';
import Swiper from 'react-native-web-swiper';
import { TouchableOpacity } from "react-native-gesture-handler";



export const SliderFlags = observer(({ slides }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Swiper
                controlsProps={{
                    prevPos: false, /* hide prev button */
                    nextPos: false, /* hide next button */
                    dotsWrapperStyle: { display: 'none' }
                }}
                containerStyle={styles.swiperContainer}>
                {slides.map((element: any, index: number) => {
                    return (
                        <View
                            key={index}
                            style={styles.container}>
                            <TouchableOpacity onPress={() => console.log('77777777')}>
                                <Image
                                    resizeMode="stretch"
                                    source={element.img}
                                />
                            </TouchableOpacity>
                            <Text style={styles.flagsTitle}>{element.title}</Text>
                        </View>
                    )
                })}
            </Swiper>
        </View>
    )
})

