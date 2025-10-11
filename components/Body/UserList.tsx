import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { use } from "react";
import CardUser from "./CardUser";

const UsersList = () => {
  interface userItem {
    id: number;
    name: string;
    storyHour: string;
    image: ImageSourcePropType;
  }

  const usersList: userItem[] = [
    {
      id: 1,
      name: "Luis",
      storyHour: "15:10",
      image: require("../../assets/images/icon_group_64.png"),
    },
    {
      id: 2,
      name: "Maria",
      storyHour: "14:37",
      image: require("../../assets/images/icon_group_64.png"),
    },
    {
      id: 3,
      name: "Ana Belen",
      storyHour: "10:42",
      image: require("../../assets/images/icon_group_64.png"),
    },
    {
      id: 4,
      name: "Airam",
      storyHour: "09:30",
      image: require("../../assets/images/icon_group_64.png"),
    },
  ];

  return (
    <View>
      <ScrollView>
        {usersList.map((user) => (
          <CardUser
            key={user.id}
            name={user.name}
            storyHour={user.storyHour}
            image={user.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  userListContainer: {},
});
