import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
    container: {
        width: "100%",
        // backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: 30
    },
    noMoviesMsg: {
        width: "100%",
        textAlign: "center",
        color: theme.text
    }
})