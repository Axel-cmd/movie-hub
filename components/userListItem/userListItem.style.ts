import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
    container: {
        marginBottom: 10,
        marginTop: 10,
        width: "100%",
        // height: "100%"
    },
    title: {
        color: theme.text,
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    noFilmInList: {
        width: "100%",
        color: theme.text,
        textAlign: "center",
        marginTop: 20
    }
})