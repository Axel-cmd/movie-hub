import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import homeStyle from "./home.style";
import theme from "../../theme/theme";
import LatestMovie from "../latestMovie/LatestMovie";

const Home = () => {
    


    return(
        <View style={homeStyle.container} >

            <Text style={{color: theme.text, fontSize: 24, width: "100%", textAlign: "center"}} >Page home</Text>
            
            <LatestMovie />


        </View>
    )
}

export default Home;