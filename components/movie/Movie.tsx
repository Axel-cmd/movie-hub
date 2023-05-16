import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import {  } from "react-native"
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const Movie = () => {

    const [movie, setMovie] = useState<any>({})

    //uste pour tester les requêtes à l'api 
    const getData = async () => {
        const test = await requestMovieAPI.get("movie/550")
        setMovie(test.data)
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

    return (
        <View style={styles.container}>
          {movie && (
            <View>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.poster}
              />
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
              {movie.video && (
                <TouchableOpacity
                  style={styles.trailerButton}
                  onPress={() =>
                    // Open the movie trailer
                    console.log('Play movie trailer')
                  }
                >
                  <Text style={styles.trailerButtonText}>Watch Trailer</Text>
                </TouchableOpacity>
              )}
              <Text style={styles.genre}>Genre: {renderGenres()}</Text>
              <Text style={styles.duration}>Duration: {movie.runtime} minutes</Text>
              <Text style={styles.director}>Director: {movie.director}</Text>
              <Text style={styles.producer}>Producer: {movie.producer}</Text>
            </View>
          )}
        </View>
      );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    poster: {
      width: 200,
      height: 300,
      resizeMode: 'cover',
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    releaseDate: {
      fontSize: 16,
      marginBottom: 10,
    },
    trailerButton: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    trailerButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    genre: {
      fontSize: 16,
      marginBottom: 5,
    },
    duration: {
      fontSize: 16,
      marginBottom: 5,
    },
    director: {
      fontSize: 16,
      marginBottom: 5,
    },
    producer: {
      fontSize: 16,
    },
  });
export default Movie;