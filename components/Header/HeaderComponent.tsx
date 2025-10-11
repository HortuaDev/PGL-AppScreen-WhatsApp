import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../styles/Colors";

const HeaderComponent = () => {
  interface CardItems {
    image: string;
    text: string;
    notifications: number;
  }

  return (
    <View style={styles.headerContainer}>
      <View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Image></Image>
          <Image></Image>
        </View>
        <ScrollView horizontal={true}></ScrollView>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: { backgroundColor: Color.primaryColor },
});
