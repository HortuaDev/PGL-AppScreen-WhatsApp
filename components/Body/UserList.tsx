import {
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { use } from "react";
import CardUser from "./CardUser";
import { Color } from "../../styles/Colors";

interface userItem {
  id: number;
  name: string;
  hour: string;
  image: ImageSourcePropType;
}

interface userList {
  users: userItem[];
}

const UsersList = ({ users }: userList) => {
  return (
    <View style={styles.userListContainer}>
      <ScrollView>
        {users.map((user) => (
          <CardUser
            key={user.id}
            name={user.name}
            hour={user.hour}
            image={user.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  userListContainer: {
    flex: 1,
    backgroundColor: Color.secondaryColor,
    padding: 15,
  },
});
