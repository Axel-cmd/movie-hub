import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { useAppContext } from "../../context/AppContext";
import listMenuStyle from "./listMenu.style";
import { useState } from "react";
import UserListItem from "../userListItem/UserListItem";
import BackButton from "../backButton/BackButton";


interface IListMenu {
    visible: boolean,
    close: () => void
}
const ListMenu = ({ visible, close }: IListMenu) => {
    
    const { movieList, createList } = useAppContext();

    const [name, setName] = useState("");

    const handleChangeText = (text: string) => {
        setName(text)
    }

    const handleSubmit = () => {
        if(name == "") return;
        // créer la liste
        createList(name);
        setName("");
    }

    return (
        <Modal
            style={{
                width: "100%"
            }}
            visible={visible}
            transparent={false}
            animationType="slide"
        >
            <View style={listMenuStyle.container}>


                <BackButton action={close} />


                <Text style={listMenuStyle.title} >Listes</Text>

                <View style={listMenuStyle.form}>
                    <TextInput 
                        value={name} 
                        onChangeText={handleChangeText} 
                        style={listMenuStyle.input} 
                        placeholder="Nouvelle liste"
                    />
                    <Pressable 
                        onPress={handleSubmit}
                        style={listMenuStyle.submitButton}
                    >

                        <Text style={listMenuStyle.submitLabel} >
                            ajouter
                        </Text>
                    </Pressable>

                </View>



                    {
                        movieList.map( (m, i) => (
                            <UserListItem id={i} key={i} list={m} />
                        ))
                    }



            </View>
        </Modal>
    )
}

export default ListMenu;