import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tab = createBottomTabNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import CurrWeather from "../screens/CurrWeather";
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";

const Tabs = ({weather}) => {
  return (
    
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "grey",
      headerStyle:{
       
        
      },
      headerTitleStyle:{
        fontSize : 25,
        fontWeight : 'bold',
         
      },
      headerTitleAlign: 'center'
    }}
    
  >
    <Tab.Screen
      name={"Current"}
    
      
      options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="home"
            size={25}
            color={focused ? "tomato" : "black"}
          />
        ),

      }}
      >
     {()=> <CurrWeather weatherData={weather.list[0]}/>}
     </Tab.Screen>
    <Tab.Screen
      name={"Upcoming"}
      options={{
        
        tabBarIcon: ({ focused }) => (
          <Feather
            name="clock"
            size={25}
            color={focused ? "tomato" : "black"}
          />
        ),
       
      }}>
        {()=> <UpcomingWeather weatherData={weather.list}/>}
      </Tab.Screen>
   
    <Tab.Screen
      name={"City"}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="city"
            size={25}
            color={focused ? "tomato" : "black"}
          />
        ),
        
      }}
    >
      {() => <City weatherData={weather.city} />}
    </Tab.Screen>
  </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})