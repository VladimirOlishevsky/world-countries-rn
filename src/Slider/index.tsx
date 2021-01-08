import { View, Image, TouchableHighlight } from 'react-native';
import React from 'react'
import Swiper from 'react-native-swiper'
import { styles } from './rawStyles';

export const Slider = ({ slides }: any) => {
    return (
        <Swiper
           height={170}
            dot={
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,.2)',
                        width: 5,
                        height: 5,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}
                />
            }
            activeDot={
                <View
                    style={{
                        backgroundColor: '#000',
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        marginLeft: 3,
                        marginRight: 3,
                        marginTop: 3,
                        marginBottom: 3
                    }}
                />
            }
           loop
        >
            {slides.map((elem: any, key: number) => {
                return (
                    <View
                        key={key}
                        style={styles.slide}>
                        <TouchableHighlight onPress={() => console.log('111111222')}>
                            <Image
                                resizeMode="stretch"
                                style={styles.image}
                                source={elem.img}
                            />
                        </TouchableHighlight>
                    </View>
                )
            })}
        </Swiper>
    )
}
