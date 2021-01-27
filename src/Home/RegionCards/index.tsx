import React from 'react';
import { View, Image, ImageURISource, ImageSourcePropType  } from "react-native"
import { Card, Title } from 'react-native-paper';
import { styles } from './rawStyles';
import { ReactPropTypes } from 'react';

import PropTypes from 'prop-types'

const aaa = PropTypes.number
//const PropTypes = require('prop-types');
//type ImageSourcePropType = React.ComponentProps<typeof Image>['source'];

// type ImageSourceProp = React.ComponentProps<typeof Image>.ImageSourcePropType; // HOW?

// interface CachedImageProps {
//     source: ImageSourceProp;
//     previewSource: ImageSourceProp;
//   }
  type aaa = 'title' | 'img'

interface Props {
    regionCards: Record<string, string>[] // add correct type
}

export const RegionCards = ({
    regionCards
}: Props) => {

    return (
        <View style={{ marginTop: 30 }}>
            {regionCards.map((el, index) => {
                return (
                    <Card
                        key={index}
                        style={{ marginTop: 30 }}
                    >
                        <Card.Cover source={{uri: el.img}} />
                        <Title style={styles.cardTitle}>{el.title}</Title>
                    </Card>
                )
            })}
        </View>
    )
}

