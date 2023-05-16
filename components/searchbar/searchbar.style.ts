import { StyleSheet } from "react-native"
import theme from "../../theme/theme"

export default StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
    },
    input: {
        height: 40,
        width: "100%",
        
        backgroundColor: "#fff",
        padding: 10,

        // bordure
        borderWidth: 1,
        borderColor: theme.primary,
        borderRadius: 15

    }
})