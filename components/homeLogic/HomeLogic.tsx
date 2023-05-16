import { useAppContext } from "../../context/AppContext";
import { ScrollView } from "react-native";
import homeLogicStyle from "./homeLogic.style";
import SearchList from "../searchList/SearchList";
import Home from "../home/Home";

const HomeLogic = () => {

    const { currentSearchValue } = useAppContext();

    return(
        <ScrollView style={homeLogicStyle.container} >

            {
                currentSearchValue == "" ?
                (
                    <Home />
                )
                :
                (
                    <SearchList />
                )
            }

        </ScrollView>
    )
}

export default HomeLogic;