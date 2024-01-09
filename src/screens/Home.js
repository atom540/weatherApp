import React ,{useState ,useEffect} from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from "../components/Tabs";
import { useGetWeather } from "../hooks/useGetWeather";


const Home = () => {
    const [ loading, error, weather]= useGetWeather()
    console.log(loading , error, weather)

 
   
  if(weather && weather.list){
      return (
        
          <SafeAreaProvider>
           <Tabs weather={weather}/>  
          </SafeAreaProvider>
       
      );
    }
 else{
    return (
      <View style={styles.container}>
       <ActivityIndicator size ={'large'} color ={'blue'} />
        </View>
    )
 }
  

 
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
});

export default Home;
