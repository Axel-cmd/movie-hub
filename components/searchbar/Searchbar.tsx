import { SafeAreaView, TextInput, View } from "react-native"
import searchbarStyle from "./searchbar.style";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Searchbar = () => {

    const { searchMovie } = useAppContext();
 
    // valeur actuel dans la barre de recherche
    const [text, setText] = useState("");

    const handleOnChangeText = (text: string) => {
        setText(text);
        searchMovie(text);
    } 

    return (
        <SafeAreaView style={searchbarStyle.container} >
            <TextInput 
                value={text}
                onChangeText={handleOnChangeText}
                style={searchbarStyle.input}
                placeholder="Rechercher"
            />
        </SafeAreaView>
    )
}

export default Searchbar;