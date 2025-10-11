import { Image, StyleSheet, Text, View } from "react-native";
import { ImageSourcePropType } from "react-native";

import React from "react";
import { Color } from "../../styles/Colors";

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

const styles = StyleSheet.create({
  cardItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    justifyContent: "center",
  },
  cardIcon: { height: 35, width: 35 },
  textContainerCard: {
    flexDirection: "row",
  },
  cardText: { fontSize: 25, color: Color.textPrimaryColor },
  cardNotification: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.primaryColor,
    marginLeft: 6,
    textAlignVertical: "center",
    alignItems: "center",
    backgroundColor: Color.textPrimaryColor,
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
});
