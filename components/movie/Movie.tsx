import { useContext, useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import {  } from "react-native"
import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import movieStyle from "./movie.style";
import { AirbnbRating } from 'react-native-ratings';
import { useAppContext } from "../../context/AppContext";
import { Modal } from "react-native";



const Movie = () => {

    const { selectedMovie, setSelectedMovie, addMovieInList } = useAppContext();

    const [movie, setMovie] = useState<any>({})
    const [visible, setVisible] = useState(false);

    //uste pour tester les requêtes à l'api 
    const getData = async (id: string) => {
        const test = await requestMovieAPI.get(`movie/${id}`)
        setMovie(test.data)
    }

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
        // console.log('Le bouton a été pressé');
        // TODO: pourvoir ajouter dans la liste qu'on souhaite
        if(movie)
            addMovieInList(0, movie.id)
    };

    const handlePressBackButton = () => {
        setSelectedMovie(null)
    }

    useEffect(() => {
        if(selectedMovie) {
            getData(selectedMovie)
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [selectedMovie])




    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
        >
            <View 
            style={movieStyle.dialog}
            
            >
          {movie && (
            <View>
                <Pressable
                    style={movieStyle.buttonBack}
                    onPress={handlePressBackButton}
                >

                    <Text style={movieStyle.label} >retour</Text>
                </Pressable>
                
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
                    <Text style={movieStyle.buttonText}>+ Ajouter à ma liste</Text>
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
        </Modal>
      );

}

export default Movie;


{/* <View>
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
                    <Text style={movieStyle.buttonText}>+ Ajouter à ma liste</Text>
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
        </View> */}