import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import { Text, View, Dimensions, Image } from "react-native";
import discoverStyle from "./discover.style";
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface IDiscoverSection {
    id: number,
    title: string,
    uri: string,
}
const DiscoverSection = ({id, title, uri}: IDiscoverSection) => {

    const width = Dimensions.get('window').width;

    const [movies, setMovies] = useState<any>([])

    const fetchMovies = async () => {

        const req =await requestMovieAPI.get(uri)
        if(req.data) {
            // console.log(req.data.results);
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
                    onSnapToItem={(item: any) => console.log(item)}
                    renderItem={({item}: {item: any}) => (
                        <View
                            style={{
                                // flex: 1,
                                borderWidth: 1,
                                width: 120,
                                justifyContent: 'center',
                                marginRight: 2,
                                borderRadius: 5
                                
                            }}
                        >

                            {/* <Text style={{color: "#fff"}} >{item.title}</Text> */}
                            
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: "cover",
                                    borderRadius: 5

                                }}
                            />


                        </View>
                    )}
                />
            </GestureHandlerRootView>

        </View>
    )
}

export default DiscoverSection;