import { Image, Pressable, Text, View } from "react-native";
import headerStyle from "./header.style";
import theme from "../../theme/theme";

const Header = ({action}: {action: () => void}) => {

    const handleOnPress = () => {
        action()
    }

    return(
        <View style={headerStyle.container} >
            <View style={headerStyle.titleContainer} >
                <Text 
                    style={[headerStyle.title, 
                        {color: theme.text}
                    ]} 
                >
                    movie-
                </Text>
                <Text 
                    style={[
                        headerStyle.title,
                        {color: theme.secondary}
                    ]} 
                >
                    hub
                </Text>
            </View>
            <Pressable
                onPress={handleOnPress}
                style={headerStyle.buttonContainer}
            >
                <Image style={headerStyle.button} source={
                    require("../../assets/hamb-menu.png")
                } />
            </Pressable>
        </View>
    )
}

export default Header;