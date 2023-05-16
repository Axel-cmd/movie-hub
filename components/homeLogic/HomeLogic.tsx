import { useAppContext } from "../../context/AppContext";
import homeLogicStyle from "./homeLogic.style";
import SearchList from "../searchList/SearchList";
import Home from "../home/Home";
import { View } from "react-native";

const HomeLogic = () => {

    const { currentSearchValue } = useAppContext();

    return(
        <View style={homeLogicStyle.container} >

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

        </View>
    )
}

export default HomeLogic;