import { StyleSheet } from "react-native";
import { Color } from "../../styles/Colors";

const styles = StyleSheet.create({
  channelContainer: {
    flex: 1,
    backgroundColor: Color.secondaryColor,
  },
  channelInfo: { flex: 1, paddingHorizontal: 10 },
  titleIconContainer: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  titleChannel: {
    flex: 1,
    color: Color.textSecondaryColor,
    fontWeight: "500",
    fontSize: 30,
  },
  iconChannel: {
    height: 20,
    width: 20,
  },
  descriptionChannelContainer: {
    marginTop: 13,
  },
  descriptionChannel: {
    color: Color.textPrimaryColor,
    fontSize: 20,
  },
  listChannelsContainer: { marginVertical: 20 },
  listChannels: {
    padding: 10,
    gap: 15,
  },
  buttonsContainer: { paddingHorizontal: 10, height: 100 },
  buttonChannel: {
    height: 55,
    width: 200,
    borderRadius: 50,
    backgroundColor: Color.buttonSecondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonChannel: {
    fontSize: 22,
    fontWeight: "500",
    color: Color.textThirdColor,
  },
});

export default styles;