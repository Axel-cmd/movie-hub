import { useEffect, useState } from "react";
import { List } from "../../models/movieList.model";
import { requestMovieAPI } from "../../api/request";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import MovieCard from "../movieCard/MovieCard";
import userListItemStyle from "./userListItem.style";


interface IUserListItem {
    id: number,
    list: List
}
const UserListItem = ({id, list}: IUserListItem) => {

    // taille de l'écran
    const width = Dimensions.get('window').width;

    const [movies, setMovies] = useState<any>([])
 
    const fetchMovieById = async (id :number) => {
        const movie = await requestMovieAPI.get(`movie/${id}`)
        
        if(movie.data) {
            setMovies((prev: any) => (
                [
                    movie.data,
                    ...prev
                ]
            ))
        }

    }

    const loadData = () => {
        list.movies.forEach( movie => {
            fetchMovieById(movie)
        } )
    }

    useEffect(() => {
        loadData()
    }, [list])


    return (
        <View style={userListItemStyle.container} >
            <Text style={userListItemStyle.title}>{list.name}</Text>

            {
                movies.length > 0 ?
                (

                    <GestureHandlerRootView>

                        <Carousel 
                            key={id}
                            loop={false}
                            width={width/3}
                            style={{
                                width: width,
                                marginTop: 20
                            }}
                            height={width/2}
                            data={movies}
                            scrollAnimationDuration={1000}
                            renderItem={({item}: {item: any}) => (
                                <MovieCard movie={item} key={item.id} />
                            )}
                        />
                    </GestureHandlerRootView>
                )
                :
                (
                    <Text style={userListItemStyle.noFilmInList} >Aucun film ajouté dans la liste</Text>
                )
            }
        </View>
    )
}

export default UserListItem;