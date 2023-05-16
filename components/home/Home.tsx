import { ScrollView, Text, View } from "react-native";
import homeStyle from "./home.style";
import LatestMovie from "../latestMovie/LatestMovie";
import DiscoverSection from "../discoverSection/DiscoverSection";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Home = () => {

    const discovers = [
        {
            title: "Films du jour",
            uri: "trending/movie/day"
        },
        {
            title: "Populaire",
            uri: "movie/popular"
        }, 
        {
            title: "Mieux notés",
            uri: "movie/top_rated"
        }
    ]
    

    return(
        

        <ScrollView style={homeStyle.container} >

            {
                discovers.map( (d, index) => (
                    <DiscoverSection key={index} id={index} title={d.title} uri={d.uri} />
                ))
            }

        </ScrollView>

           


    )
}

export default Home;