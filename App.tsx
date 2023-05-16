import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestMovieAPI } from "./api/request";
import { Header } from 'react-native/Libraries/NewAppScreen';
import Movie from './components/movie/Movie';
import appStyle from './app.style';


export default function App() {

  return (
    <View style={appStyle.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
