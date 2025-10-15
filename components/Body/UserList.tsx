import { ImageSourcePropType, ScrollView, View } from "react-native";
import React from "react";
import styles from "./UserListStyles";
import CardUser from "./CardUser";

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
