import { Image, Text, View } from "react-native";
import { ImageSourcePropType } from "react-native";

import React from "react";
import styles from "./CardItemHeaderStyles";

interface CardItem {
  image?: ImageSourcePropType;
  text?: string;
  notifications?: number;
}

const CarItemHeader = (props: CardItem) => {
  const { image, text, notifications } = props;

  return (
    <View style={styles.cardItemContainer}>
      {image && <Image source={image} style={styles.cardIcon} />}
      <View style={styles.textContainerCard}>
        {text && <Text style={styles.cardText}>{text}</Text>}
        {notifications !== undefined && (
          <Text style={styles.cardNotification}>{notifications}</Text>
        )}
      </View>
    </View>
  );
};

export default CarItemHeader;
