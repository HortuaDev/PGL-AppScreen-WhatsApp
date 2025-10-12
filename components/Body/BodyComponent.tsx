import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UsersList from "./UserList";
import ViewedUpdate from "./ViewedUpdate";
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
    width: "100%",
  },
});
