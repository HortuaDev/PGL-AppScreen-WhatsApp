import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const usersList = () => {
  interface userItem {
    name: string;
    storyHour: string;
    image: ImageSourcePropType;
  }

  const usersList: userItem[] = [
    { name: "Luis", storyHour: "15:10", image: require("") },
    { name: "Maria", storyHour: "14:37", image: require("") },
    { name: "Ana Belen", storyHour: "10:42", image: require("") },
    { name: "Airam", storyHour: "09:30", image: require("") },
  ];

  return (
    <View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default usersList;

const styles = StyleSheet.create({
  userListContainer: {},
});
