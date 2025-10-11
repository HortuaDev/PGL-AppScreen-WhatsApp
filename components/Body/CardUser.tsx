import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

interface userItem {
  name: string;
  storyHour: string;
  image: ImageSourcePropType;
}

const CardUser = (prop: userItem) => {
  const { name, storyHour, image } = prop;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.borderAvailable}>
          <Image style={styles.imageUser} source={image} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textContainer}>{name}</Text>
        <Text style={styles.hourContainer}>{storyHour}</Text>
      </View>
    </View>
  );
};

export default CardUser;

const styles = StyleSheet.create({
  cardContainer: {},
  imageContainer: {},
  borderAvailable: {},
  imageUser: {},
  infoContainer: {},
  textContainer: {},
  hourContainer: {},
});
