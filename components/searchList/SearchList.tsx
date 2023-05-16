import { ScrollView, Text } from "react-native";
import searchListStyle from "./searchList.style";
import { useAppContext } from "../../context/AppContext";


const SearchList = () => {

   const { currentSearchValue } = useAppContext();

    return(
        <ScrollView style={searchListStyle.container} >

            
            <Text style={searchListStyle.noMoviesMsg} >Aucun résultat pour la recherche "{currentSearchValue}"</Text>

        </ScrollView>
    )
}

export default SearchList;