import React from 'react';
import { Text, View, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { sliderImage } from '../config/config';
import { styles, SLIDER_WIDTH, ITEM_WIDTH, ITEM_HEIGHT } from './rawStyles';
// import { SlideItem } from './SliderItem';


const SlideItem = ({ item, index }: any) => {
    return (
        <View style={styles.itemContainer}>
            <Image
                style={styles.itemContainer}
                source={{
                    uri: item.img
                }}
            />
            <Text style={styles.itemLabel}>{item.title}</Text>
        </View>
    );
}

export const SliderNew: React.FC = () => {

    return (
        <View style={styles.carouselBlock}>
            <Carousel
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                useScrollView={true}
                data={sliderImage}
                renderItem={SlideItem} />
        </View>
    );
};


// const styles = StyleSheet.create({
//     carouselContainer: {
//         marginTop: 50
//     },
//     itemContainer: {
//         width: ITEM_WIDTH,
//         height: ITEM_HEIGHT,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     itemLabel: {
//         color: 'white',
//         fontSize: 20,
//         textAlign: 'center'
//     },
//     counter: {
//         marginTop: 25,
//         fontSize: 30,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     }
// });