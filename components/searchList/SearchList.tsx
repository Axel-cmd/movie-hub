import { ScrollView, Text } from "react-native";
import searchListStyle from "./searchList.style";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";
import { requestMovieAPI } from "../../api/request";
import MovieList from "../movieList/MovieList";


const SearchList = () => {

    const [movies, setMovies] = useState<any>([]);

   const { currentSearchValue } = useAppContext();

    const getData = async () => {
        const data = await requestMovieAPI.get("search/movie", { 
            params: {
                "query": currentSearchValue
            }
        })

        console.log(data.data)
        setMovies(data.data)

    }
 
   useEffect(() => {


    getData();


   }, [currentSearchValue])

    return(
        <ScrollView style={searchListStyle.container} >

            {
                movies.length == 0 ?
                ( <Text style={searchListStyle.noMoviesMsg} >Aucun résultat pour la recherche "{currentSearchValue}"</Text>)
                :
                (
                    <MovieList movies={movies} />
                )
            }
           

        </ScrollView>
    )
}

export default SearchList;