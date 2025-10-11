import { StyleSheet, Text, View } from "react-native";
import HeaderComponent from "./components/Header/HeaderComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <View style={{ flex: 10 }}>
        <Text>hola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
