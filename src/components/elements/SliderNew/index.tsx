import React from 'react';
import { View, ListRenderItemInfo } from 'react-native';
import { useTheme } from 'react-native-paper';

import Carousel from 'react-native-snap-carousel';
import { sliderImage } from '../../../config/config';
import { ISlideItem } from '../../../config/types';
import { SLIDER_WIDTH, ITEM_WIDTH } from './constants';
import { makeStyles } from './rawStyles';
import { SlideItem } from './SliderItem';

// import { useNavigation } from '@react-navigation/native';
// import { Text, Image, ListRenderItem } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { ISlideItem } from '../../../../config/types';
// import { getRootStore } from '../../../store';
// import { makeStyles } from './rawStyles';


export const SliderNew = (): JSX.Element => {

    const theme = useTheme();
    const styles = makeStyles(theme);

    // const theme = useTheme();
    // const styles = makeStyles(theme)

    // const { countryStore } = getRootStore();
    // const navigation = useNavigation();

    // const actionByClick = (code: string) => {
    //     countryStore.fetchCountryByCode(code);
    //     navigation.navigate("Country", { name: code });
    // }


    // const _renderItem = (value: Aaa) => (
    //     <TouchableOpacity
    //         onPress={() => actionByClick(value.item.iso_2cc)}
    //     >
    //         <View>
    //             <Image
    //                 style={styles.itemContainer}
    //                 source={{
    //                     uri:  value.item.img
    //                 }}
    //             />
    //             <Text style={styles.itemLabel}>{value.item.title}</Text>
    //         </View>
    //     </TouchableOpacity>
    //   );

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