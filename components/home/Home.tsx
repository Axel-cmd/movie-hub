import { Text, View } from "react-native";
import homeStyle from "./home.style";
import LatestMovie from "../latestMovie/LatestMovie";
import DiscoverSection from "../discoverSection/DiscoverSection";

const Home = () => {

    const discovers = [
        {
            title: "Populaire",
            uri: "movie/popular"
        }, {
            title: "Mieux notés",
            uri: "movie/top_rated"
        }
    ]
    

    return(
        <View style={homeStyle.container} >

            {
                discovers.map( (d, index) => (
                    <DiscoverSection key={index} id={index} title={d.title} uri={d.uri} />
                ))
            }

        </View>
    )
}

export default Home;