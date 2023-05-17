import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import { Text, View, Dimensions, Image, Pressable } from "react-native";
import discoverStyle from "./discover.style";
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAppContext } from "../../context/AppContext";
import MovieCard from "../movieCard/MovieCard";

interface IDiscoverSection {
    id: number,
    title: string,
    uri: string,
}
const DiscoverSection = ({id, title, uri}: IDiscoverSection) => {

    // taille de l'écran
    const width = Dimensions.get('window').width;

    // liste des films
    const [movies, setMovies] = useState<any>([])

    // récupérer les films liés à la section grâce à l'id
    const fetchMovies = async () => {

        const req =await requestMovieAPI.get(uri)
        if(req.data) {
            setMovies(req.data.results);
        }
    }

    // appelé une seule fois lors de l'initalisation du composant
    useEffect(() => {
        fetchMovies()
    }, [])

    return(
        <View style={discoverStyle.container} >

            <Text style={discoverStyle.title}>{title}</Text>
            <GestureHandlerRootView>

                <Carousel 
                    key={id}
                    loop
                    width={width/3}
                    style={{
                        width: width,
                        marginTop: 20
                    }}
                    height={width/2}
                    data={movies}
                    scrollAnimationDuration={1000}
                    // onSnapToItem={(item: any) => console.log(item)}
                    renderItem={({item}: {item: any}) => (
                        <MovieCard movie={item} key={item.id} />
                    )}
                />
            </GestureHandlerRootView>

        </View>
    )
}

export default DiscoverSection;