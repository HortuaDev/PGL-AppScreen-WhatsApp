import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UsersList from "./usersList";
import ViewedUpdate from "./viewedUpdate";
import Channels from "./Channels";

const BodyComponent = () => {
  return (
    <View style={styles.bodyContainer}>
      <UsersList />
      <ViewedUpdate />
      <Channels />
    </View>
  );
};

export default BodyComponent;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 10,
  },
});
