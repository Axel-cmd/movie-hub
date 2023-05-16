import { View, Text, Image } from "react-native";
import latestMovieStyle from "./latestMovie.style";
import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";


const LatestMovie = () => {

    const [latestMovie, setLatestMovie] = useState<any>({});
    const [movieImg, setMovieImg] = useState<string>("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.referenseo.com%2Fblog%2F10-banques-images-gratuites-libre-droits%2F&psig=AOvVaw1zOhFmi3Ov0pGXzTy1rIB-&ust=1684344170812000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjos5Ot-v4CFQAAAAAdAAAAABAD");

    const fetchLatestMovie = async () => {
        const movie = await requestMovieAPI.get("/movie/latest")

        setLatestMovie(movie.data)

        console.log(movie.data.poster_path)

        if(latestMovie.poster_path) {
            setMovieImg(`https://image.tmdb.org/t/p/w500${latestMovie.poster_path}`)
        } else {
            setMovieImg(`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.referenseo.com%2Fblog%2F10-banques-images-gratuites-libre-droits%2F&psig=AOvVaw1zOhFmi3Ov0pGXzTy1rIB-&ust=1684344170812000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjos5Ot-v4CFQAAAAAdAAAAABAD`)
        }

        
        console.log(movieImg)
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
                source={{ 
                    uri: movieImg }}
                style={{ width: 600, height: 400 }}
            />


        </View>
    )


}

export default LatestMovie;