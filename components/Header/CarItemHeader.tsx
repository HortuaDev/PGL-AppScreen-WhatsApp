import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardItem {
  image?: string;
  text?: string;
  notifications?: number;
}

const CarItemHeader = (props: CardItem) => {
  return (
    <View style={styles.cardItemContainer}>
      <Image></Image>
      <Text>CarItemHeader</Text>
      <Text>2</Text>
    </View>
  );
};

export default CarItemHeader;

const styles = StyleSheet.create({
  cardItemContainer: {},
});
