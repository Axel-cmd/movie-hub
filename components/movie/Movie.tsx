import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import {  } from "react-native"
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import movieStyle from "./movie.style";
import { AirbnbRating } from 'react-native-ratings';

const Movie = () => {

    const [movie, setMovie] = useState<any>({})
    // const [minutes, setMinutes] = useState<string>("");


    //uste pour tester les requêtes à l'api 
    const getData = async () => {
        const test = await requestMovieAPI.get("movie/660984")
        setMovie(test.data)
        // setMinutes(convertMinutesToHours(movie.runtime))
        console.log(test.data)
    }

    useEffect(() => {
        getData()
    }, [])


    const renderGenres = () => {
        if (movie && movie.genres) {
          return movie.genres.map((genre: { name: string }) => genre.name).join(', ');
        }
        return '';
    };


    const convertMinutesToHours = (minutes: number) => {
        const hours: number = Math.floor(minutes / 60);
        const remainingMinutes: number = minutes % 60;
        return `${hours}h ${remainingMinutes}min`;
    };

    const rating = Math.round(movie.vote_average / 2);
    const handlePress = () => {
        console.log('Le bouton a été pressé');
      };
    return (
        <View>
          {movie && (
            <View>
                <View style={movieStyle.first}>
                    <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    style={movieStyle.poster}
                    />
                    <View style={movieStyle.info}>
                        <Text style={movieStyle.title}>{movie.title}</Text>
                        <Text style={movieStyle.releaseDate}>Sortie: {movie.release_date}</Text>
                        <View >
                            <AirbnbRating
                            starContainerStyle={movieStyle.star}
                            defaultRating={rating}
                            size={20}
                            showRating={false}
                            selectedColor="#f1c40f"
                            isDisabled={true}
                            />
                        </View>
                    </View>
                </View>
                {movie.video && (
                    <TouchableOpacity
                    style={movieStyle.trailerButton}
                    onPress={() =>
                        // Open the movie trailer
                        console.log('Play movie trailer')
                    }
                    >
                    <Text style={movieStyle.trailerButtonText}>Watch Trailer</Text>
                    </TouchableOpacity>
                )}
                                <Text> {'\n'} </Text>
                <Pressable style={movieStyle.button} onPress={handlePress}>
                    <Text style={movieStyle.buttonText}>+ Ajouter à ma list</Text>
                </Pressable>
                <Text> {'\n'} </Text>
                <Text style={movieStyle.description}>{movie.overview}</Text>
                <Text> {'\n'} </Text>
                <Text style={movieStyle.genre}>Genre: {renderGenres()}</Text>
                <Text style={movieStyle.duration}>Durée: {convertMinutesToHours(movie.runtime)}</Text>
                <Text style={movieStyle.director}>Direction: {movie.director}</Text>
                <Text style={movieStyle.producer}>Procucteur: {movie.producer}</Text>
            </View>
          )}
        </View>
      );

}

export default Movie;