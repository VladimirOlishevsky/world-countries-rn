import { Text, View, Image } from 'react-native';
import React from 'react'
import Swiper from 'react-native-swiper'
import { styles } from './rawStyles';
import { slides } from './config';

export const Slider = () => {
    return (
        <Swiper
            //style={styles.wrapper}
            height={240}
            onMomentumScrollEnd={(e, dataImage, context) =>
                console.log('index:', dataImage.index)
            }
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
            {slides.map((image, key) => {
                return <View
                    key={key}
                    style={styles.slide}
                    title={
                        <Text numberOfLines={1}>{image.title}</Text>
                    }
                >
                    <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={image.img}
                    />
                </View>
            })}

        </Swiper>
    )
}
