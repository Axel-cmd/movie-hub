import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestMovieAPI } from "./api/request";
import Movie from './components/movie/Movie';
import Header from './components/header/Header';
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
