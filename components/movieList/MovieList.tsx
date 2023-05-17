import { View } from "react-native";
import MovieCard from "../movieCard/MovieCard";

interface IMovieList {
    movies: any[]
}
const MovieList = ({ movies }: IMovieList) => {

    return(
        <>
         {
            movies.map( (value, index) => (
                <View key={index} style={{height: 200}} >
                    <MovieCard  movie={value} />
                </View>
            ))
         }
        </>
    )
}

export default MovieList;