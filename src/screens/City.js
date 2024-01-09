import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";
import moment from 'moment'
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const City = ({weatherData}) => {
  const { name, country, population, sunrise, sunset } = weatherData
  return (
    <SafeAreaView style={styles.container}>
     
        <View style={styles.body}>
          <Text style={styles.state}>{name}</Text>
          <Text style={styles.country}>{country}</Text>
          <View style={styles.popleContainer}>
            <FontAwesome5 name="user" size={50} color="black" />
            <Text style={styles.innerpeople}>{population}</Text>
          </View>
          <View style={styles.time}>
            <Feather name="sunrise" size={50} color="black" />
            <Text style={styles.timeInner}>{moment(sunrise).format('h:mm:ss a')}</Text>
            <Feather name="sunset" size={50} color="black" />
            <Text style={styles.timeInner}>{moment(sunset).format('h:mm:ss a')}</Text>
          </View>
        </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  state: {
    fontSize: 40,
    color: "black",
  },
  country: {
    fontSize: 30,
    color: "black",
  },
  popleContainer: {
    flexDirection: "row",
    color: "white",
  },
  innerpeople: {
    color: "black",
    marginTop: 15,
  },
  time: {
    flexDirection: "row",
    gap: 15,
    marginTop: 15,
  },
  timeInner: {
    color: "black",
    fontSize: 20,
    marginTop: 15,
  },
});

export default City;
