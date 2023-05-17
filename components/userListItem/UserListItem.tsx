import { useEffect, useState } from "react";
import { List } from "../../models/movieList.model";
import { requestMovieAPI } from "../../api/request";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import listMenuStyle from "../listMenu/listMenu.style";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";


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
        <View style={listMenuStyle.container} >
            <Text style={listMenuStyle.title}>{list.name}</Text>
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
                        <Pressable
                            onPress={() => console.log(item)}
                            style={{
                                // flex: 1,
                                borderWidth: 1,
                                width: 120,
                                justifyContent: 'center',
                                marginRight: 2,
                                borderRadius: 5
                                
                            }}
                        >
                            
                            <Image
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: "cover",
                                    borderRadius: 5

                                }}
                            />


                        </Pressable>
                    )}
                />
            </GestureHandlerRootView>
        </View>
    )
}

export default UserListItem;