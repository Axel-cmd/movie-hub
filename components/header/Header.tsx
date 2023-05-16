import { Pressable, Text, View } from "react-native";
import headerStyle from "./header.style";

const Header = () => {

    const handleOnPress = () => {

    }

    return(
        <View>
            <Text style={headerStyle.title} >movie-hub</Text>
            <Pressable
                onPress={handleOnPress}
                style={headerStyle.button}
            >
                // ajouter un icon + ici
            </Pressable>
        </View>
    )
}

export default Header;