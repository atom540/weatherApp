import React from "react";
import { SafeAreaView, Text, View, StyleSheet, FlatList,StatusBar,  ImageBackground} from "react-native";
import { Feather } from "@expo/vector-icons";
import ListItem from "../components/ListItem";
import { useGetWeather } from "../hooks/useGetWeather";



const UpcomingWeather = ({weatherData}) => {

  const renderItem = ({ item }) => {
    return(
    <ListItem 
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      max={item.main.temp_max}
      min={item.main.temp_min}
    />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{  paddingLeft: 20, color: 'black'}}>Upcoming weather</Text>
      <FlatList data={weatherData} renderItem={renderItem} keyExtractor={item=>item.dt} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    color:'black'
    
  },
  image: {
    flex: 1
  },
 
  itemContainer: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor:'white',
    borderWidth: 5,
    alignItems: 'center',
    // backgroundColor: 'white'
  },
  temp:{
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
});

export default UpcomingWeather;
