import { Pressable, Text } from "react-native";
import backButtonStyle from "./backButton.style";

interface IBackButton {
    action: () => void
}
const BackButton = ({ action }: IBackButton) => {

    return (
        <Pressable
            style={backButtonStyle.button}
            onPress={action}
        >

            <Text style={backButtonStyle.label} >retour</Text>
        </Pressable>
    )

}

export default BackButton;