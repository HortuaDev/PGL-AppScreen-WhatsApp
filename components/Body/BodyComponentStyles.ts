import { StyleSheet } from "react-native";
import { Color } from "../../styles/Colors";


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

export default styles;
