import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import latestMovieStyle from "./latestMovie.style";
import { requestMovieAPI } from "../../api/request";


const LatestMovie = () => {

    const [latestMovie, setLatestMovie] = useState<any>({});
    const [movieImg, setMovieImg] = useState<string>("https://placehold.jp/ededed/000/150x150.png?text=No%20image");

    const fetchLatestMovie = async () => {
        const movie = await requestMovieAPI.get("movie/latest")

        setLatestMovie(movie.data)

        console.log(latestMovie.poster_path)

        if(latestMovie.poster_path) {
            setMovieImg(`https://image.tmdb.org/t/p/w500${latestMovie.poster_path}`)
        } else {
            setMovieImg(`https://placehold.jp/ededed/000/150x150.png?text=No%20image`)
        }

        
    }

    useEffect(() => {
        fetchLatestMovie();
    }, [])

    return (
        <View style={latestMovieStyle.container} >


            <Text style={{color: "#fff"}} >
                {latestMovie.title}

            </Text>

            <Image
                
                style={ latestMovieStyle.image }
                source={{
                    uri: movieImg
                }}
            />


        </View>
    )


}

export default LatestMovie;