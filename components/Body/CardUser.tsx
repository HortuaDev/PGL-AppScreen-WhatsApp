import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const CardUser = () => {
  interface userItem {
    name: string;
    storyHour: string;
    image: ImageSourcePropType;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.borderAvailable}>
          <Image style={styles.imageUser}></Image>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.textContainer}></Text>
        <Text style={styles.hourContainer}></Text>
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
