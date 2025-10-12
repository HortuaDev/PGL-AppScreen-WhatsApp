import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CardChannel = () => {
  return (
    <View style={styles.CardChannelContainer}>
      <View style={styles.CardImageContainer}>
        <Image style={styles.CardImage} />
      </View>
      <View style={styles.CardNameContainer}>
        <Text style={styles.CardName}></Text>
      </View>
      <Pressable style={styles.CardButtonContainer}>
        <Text style={styles.TextButton}></Text>
      </Pressable>
    </View>
  );
};

export default CardChannel;

const styles = StyleSheet.create({
  CardChannelContainer: {},
  CardImageContainer: {},
  CardImage: {},
  CardNameContainer: {},
  CardName: {},
  CardButtonContainer: {},
  TextButton: {},
});
