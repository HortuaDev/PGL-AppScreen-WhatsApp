import {
  ScrollView,
  StyleSheet,
  View,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import UsersList from "./UserList";
import ViewedUpdate from "./ViewedUpdate";
import Channels from "./Channels";

const BodyComponent = () => {
  interface userItem {
    id: number;
    name: string;
    hour: string;
    image: ImageSourcePropType;
  }

  const users: userItem[] = [
    {
      id: 1,
      name: "Alejandro",
      hour: "15:10",
      image: require("../../assets/images/new_york.jpg"),
    },
    {
      id: 2,
      name: "Maria",
      hour: "14:37",
      image: require("../../assets/images/race_car.jpg"),
    },
    {
      id: 3,
      name: "Ana Belen",
      hour: "10:42",
      image: require("../../assets/images/dog.jpg"),
    },
    {
      id: 4,
      name: "Airam",
      hour: "09:30",
      image: require("../../assets/images/boat.jpg"),
    },
  ];

  return (
    <View style={styles.bodyContainer}>
      <ScrollView style={styles.bodyContentList}>
        <UsersList users={users} />
        <ViewedUpdate />
        <Channels />
      </ScrollView>
    </View>
  );
};

export default BodyComponent;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 10,
    width: "100%",
  },
  bodyContentList: { flex: 1 },
});
