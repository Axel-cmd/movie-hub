import { StyleSheet } from "react-native";
import theme from "../../theme/theme";

export default StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: theme.background,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    label: {
        fontSize: 16,
        color: theme.secondary,
    },
    title: {
        color: theme.primary,
        width: "100%",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: 20
    },
    form: {
        width: "100%",
        height: 40,
        padding: 10,
        marginBottom: 12,

        borderWidth: 1,
        borderColor: theme.primary,
        borderRadius: 15,

        backgroundColor: "#fff",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    input: {
        width: "80%"
    },
    submitButton: {
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    submitLabel: {
        color: theme.secondary,
        textTransform: "capitalize",
    }
})