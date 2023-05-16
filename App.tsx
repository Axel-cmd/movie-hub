import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './components/header/Header';
import appStyle from './app.style';
import Searchbar from './components/searchbar/Searchbar';


export default function App() {

  return (
    <View style={appStyle.container}>
      <Header />
      <Searchbar />
      <StatusBar style="auto" />
    </View>
  );
}12
