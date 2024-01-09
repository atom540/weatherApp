import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { WEATHER_API_KEY } from "@env";
import Home from "./src/screens/Home";
import { Button } from "react-native";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [address, setAddress] = useState("London");

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      setError("Could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("permission to access location was denied");
          return;
        }

        const location = await Location.geocodeAsync(address);
        setLat(location[0]?.latitude);
        setLon(location[0]?.longitude);
        await fetchWeatherData();
        console.log(location);
      } catch (error) {
        console.error("Error setting location:", error);
        setError("Error setting location");
      }
    })();
  }, [lat, lon]);

  const handleAddressChange = (text) => {
    setAddress(text);
  };
  const handleClick= ()=>{
    setLat([]);
    setLon([]);
  };

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <View
            style={{
              flexDirection: "row",
              textAlign: "center",
              marginLeft: 25,
              paddingTop: 8,
              marginTop: 50,
              fontSize: 25,
              fontWeight: "bold",
              justifyContent:'space-between'
            }}
          >
            <Text style={{ paddingTop: 10,fontSize: 15, fontWeight: "300" }}>
              Enter your Location :
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "black",
                borderWidth: 2,
                width: 150,
                alignItems: "center",
                borderRadius: 15,
                fontSize: 15,
                fontWeight: "300",
                textAlign: "center",
              }}
              placeholder="Enter Address"
              onChangeText={handleAddressChange}
              value={address}
            />
          </View>
          <Button title="Set Location" onPress={handleClick} >Press</Button>
          <Tabs weather={weather} />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
