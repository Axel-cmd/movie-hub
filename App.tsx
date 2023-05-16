import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/header/Header';
import appStyle from './app.style';
import Movie from './components/movie/Movie';
import Searchbar from './components/searchbar/Searchbar';
import { AppProvider } from './context/AppContext';
import HomeLogic from './components/homeLogic/HomeLogic';


export default function App() {

  return (
    <View style={appStyle.container}>
      <AppProvider>
        <Header />
        <Searchbar />
        <HomeLogic />
        <Movie />
      </AppProvider>
      <StatusBar style="auto" />
    </View>
  );
}
