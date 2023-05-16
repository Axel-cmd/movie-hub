import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/header/Header';
import appStyle from './app.style';
import Movie from './components/movie/Movie';
import Searchbar from './components/searchbar/Searchbar';
import { AppProvider } from './context/AppContext';
import HomeLogic from './components/homeLogic/HomeLogic';
import { useState } from 'react';
import ListMenu from './components/listMenu/ListMenu';


export default function App() {

  const [menuVisible, setMenuVisible] = useState(false)

  const handleToggleMenu = () => {
    // inversé la valeur du useState
    setMenuVisible(!menuVisible);
  }

  return (
    <View style={appStyle.container}>
      <Header action={handleToggleMenu} />
      <AppProvider>
        <Searchbar />
        <HomeLogic />
        <Movie />
        <ListMenu close={handleToggleMenu} visible={menuVisible} />
      </AppProvider>
      <StatusBar style="auto" />
    </View>
  );
}
