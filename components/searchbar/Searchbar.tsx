import { SafeAreaView, TextInput } from "react-native"
import searchbarStyle from "./searchbar.style";
import { useState } from "react";

const Searchbar = () => {

    // valeur actuel dans la barre de recherche
    const [text, setText] = useState("");

    const handleOnChangeText = (text: string) => {
        setText(text);
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