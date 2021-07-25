import React from 'react';
import { View, ListRenderItemInfo } from 'react-native';
import { useTheme } from 'react-native-paper';

import Carousel from 'react-native-snap-carousel';
import { sliderImage } from '../../../config/config';
import { ISlideItem } from '../../../config/types';
import { SLIDER_WIDTH, ITEM_WIDTH } from './constants';
import { makeStyles } from './rawStyles';
import { SlideItem } from './SliderItem';

export const SliderNew: React.FC = () => {

    const theme = useTheme();
    const styles = makeStyles(theme)

    return (
        <View style={styles.carouselBlock}>
            <Carousel
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                inactiveSlideShift={0}
                useScrollView={true}
                data={sliderImage as ISlideItem[]}
                renderItem ={(item: ListRenderItemInfo<ISlideItem>) => <SlideItem {...item}/>} />
        </View>
    );
};