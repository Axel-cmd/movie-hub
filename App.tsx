import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Header from './components/header/Header';
import appStyle from './app.style';
import Movie from './components/movie/Movie';

export default function App() {

  return (
    <View style={appStyle.container}>
      {/* <Header /> */}
      <Movie />
      <StatusBar style="auto" />
    </View>
  );
}
