import { StyleSheet, StatusBar } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
    container: {
        // height: "15%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap"
    },
    titleContainer: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    buttonContainer: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    button: {
        width: 25,
        height: 25
    }
})