import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestMovieAPI } from "./api/request";


export default function App() {

  // juste pour tester les requêtes à l'api 
  const getData = async () => {
    const test = await requestMovieAPI.get("movie/550")
    console.log(test)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>

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
