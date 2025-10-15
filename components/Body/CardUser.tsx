import { Image, ImageSourcePropType, Text, View } from "react-native";
import React from "react";

import styles from "./CardUserStyles";

interface userItem {
  name: string;
  hour: string;
  image: ImageSourcePropType;
}

const CardUser = (prop: userItem) => {
  const { name, hour, image } = prop;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.borderSeparator}>
          <Image style={styles.imageUser} source={image} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textContainer}>{name}</Text>
        <Text style={styles.hourContainer}>{hour}</Text>
      </View>
    </View>
  );
};

export default CardUser;
