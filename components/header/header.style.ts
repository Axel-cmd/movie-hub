import { StyleSheet, StatusBar } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
        paddingTop: StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: "space-between",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",

    },
    title: {
        color: theme.primary,
        fontSize: 36,
        textTransform: "uppercase",

    },
    button: {

    }
})