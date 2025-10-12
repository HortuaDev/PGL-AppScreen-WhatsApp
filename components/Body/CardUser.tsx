import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Color } from "../../styles/Colors";

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
        <View style={styles.borderSeparator}>
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
  cardContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.storyAvailableColor,
    borderRadius: 50,
    padding: 2,
  },
  borderSeparator: {
    borderRadius: 50,
    backgroundColor: "red",
  },
  imageUser: {
    borderRadius: 50,
    padding: 4,
  },
  infoContainer: { flex: 1, padding: 5 },
  textContainer: {
    flex: 1,

    textAlignVertical: "center",
    fontSize: 25,
  },
  hourContainer: { flex: 1, textAlignVertical: "center", fontSize: 20 },
});
