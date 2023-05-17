import { Image, Pressable } from "react-native";
import { useAppContext } from "../../context/AppContext";
import movieCardStyle from "./movieCard.style";

interface IMovieCard {
    movie: any
}
const MovieCard = ({ movie }: IMovieCard) => {

    const { setSelectedMovie } = useAppContext();


    const handlePressItem = () => {
        // console.log(movie.title)
        setSelectedMovie(movie.id)
    }

    return (
        <Pressable
            onPress={handlePressItem}
            style={movieCardStyle.card}
        >

            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={movieCardStyle.img}
            />

        </Pressable>
    )
}

export default MovieCard;