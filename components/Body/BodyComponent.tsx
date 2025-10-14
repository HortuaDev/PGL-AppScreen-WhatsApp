import {
  ScrollView,
  StyleSheet,
  View,
  ImageSourcePropType,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import UsersList from "./UserList";
import ViewedUpdate from "./ViewedUpdate";
import Channels from "./Channels";
import { Color } from "../../styles/Colors";

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

  interface channelItem {
    id: number;
    name: string;
    image: ImageSourcePropType;
  }

  const channels: channelItem[] = [
    {
      id: 1,
      name: "Real Madrid",
      image: require("../../assets/images/real_madrid.jpg"),
    },
    {
      id: 2,
      name: "BAD BUNNY",
      image: require("../../assets/images/bad_bunny.jpg"),
    },
    {
      id: 3,
      name: "NVIDIA",
      image: require("../../assets/images/nvidia.png"),
    },
    {
      id: 4,
      name: "NFL",
      image: require("../../assets/images/nfl.png"),
    },
  ];

  return (
    <View style={styles.bodyContainer}>
      <ScrollView style={styles.bodyContentList}>
        <UsersList users={users} />
        <ViewedUpdate />
        <Channels listUser={channels} />
      </ScrollView>
      <View style={styles.generalButtonsContainer}>
        <View style={styles.editButtonContainer}>
          <Pressable style={styles.editButton}>
            <Image
              style={styles.icon_edit}
              source={require("../../assets/images/icon_edit_24.png")}
            />
          </Pressable>
        </View>
        <View style={styles.cameraButtonContainer}>
          <Pressable style={styles.cameraButton}>
            <Image
              style={styles.icon_camera}
              source={require("../../assets/images/icon_camera_2_48.png")}
            />
          </Pressable>
        </View>
      </View>
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
  generalButtonsContainer: {
    marginTop: -180,
    width: "100%",
    alignItems: "flex-end",
  },
  editButtonContainer: {
    height: 80,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraButtonContainer: {
    height: 100,
    width: 130,
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: Color.buttonThirdColor,
    alignItems: "center",
    justifyContent: "center",
  },
  icon_edit: {
    height: 25,
    width: 25,
  },
  cameraButton: {
    height: 60,
    width: 60,
    borderRadius: 10,
    backgroundColor: Color.buttonSecondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  icon_camera: {
    height: 35,
    width: 35,
  },
});
