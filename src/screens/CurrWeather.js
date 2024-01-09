import React from "react";
import { View, Text, StyleSheet, SafeAreaView ,ScrollView  } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
const CurrWeather = ({ weatherData }) => {
  const {
    main: { temp, feels_like, temp_max, temp_min, humidity },
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView > 
      <View style={styles.container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="black"
        ></Feather>
        <Text style={styles.temps}>{`${temp}° F`}</Text>
        <Text style={styles.feel}> {`Feels like ${feels_like}`}</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}> {`High: ${temp_max}° F`}</Text>
          <Text style={styles.highLow}>{`Low: ${temp_min}° F`}</Text>
        </View>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>Humidity: {humidity}</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>{weather[0]?.description}</Text>
        <Text style={styles.message}>{weatherType[weatherCondition]?.message}</Text>
      </View>

      </ScrollView > 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temps: {
    color: "black",
    fontSize: 48,
  },
  feel: {
    color: "black",
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 30,
    paddingBottom: 20,
  },
  description: {
    fontSize: 48,
    color: "black",
  },
  message: {
    fontSize: 20,
    color: "black",
  },
});

export default CurrWeather;
