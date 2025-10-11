import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../styles/Colors";
import CarItemHeader from "./CarItemHeader";

const HeaderComponent = () => {
  interface CardItem {
    id: number;
    image?: string;
    text?: string;
    notifications?: number;
  }

  const itemsInfo: CardItem[] = [
    { id: 1, image: "" },
    { id: 2, text: "Chats", notifications: 2 },
    { id: 3, text: "Updates" },
    { id: 4, text: "Calls" },
  ];

  return (
    <View style={styles.headerContainer}>
      <View style={styles.topPart}>
        <View style={styles.contentTile}>
          <Text style={styles.title}>WhatsApp</Text>
        </View>
        <View style={styles.contentIcons}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/icon_camera_48.png")}
          ></Image>
          <Image
            style={styles.icon}
            source={require("../../assets/images/icon_menu_48.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.buttonPart}>
        <ScrollView horizontal={true}>
          {itemsInfo.map((item) => (
            <CarItemHeader key={item.id} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Color.primaryColor,
    flex: 1,
    width: "100%",
  },

  topPart: { flex: 1, flexDirection: "row" },
  contentTile: { flex: 15, justifyContent: "center", alignItems: "flex-start" },
  title: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: Color.textPrimaryColor,
  },
  buttonPart: { flex: 1 },
  contentIcons: {
    flex: 1,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: { height: 32, width: 32 },
});
