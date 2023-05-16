import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestMovieAPI } from "./api/request";
import { Header } from 'react-native/Libraries/NewAppScreen';
import Movie from './components/movie/Movie';


export default function App() {

  return (
    <View style={styles.container}>
      {/* <Header />
      <Movie /> */}
      <Movie />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
