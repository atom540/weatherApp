import React ,{useState ,useEffect} from "react";
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env';

export const useGetWeather= () =>{  
    const [loading ,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [weather, setWeather] =useState([]);
    const [lat, setLat]= useState([]);
    const [lon, setLon]= useState([]);
    const [address,setAddress] = useState("London");

   
    const fetchWeatherData= async () =>{
      try{
        const res =await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data =await res.json()
      setWeather(data)
      setLoading(false)
      }catch(e){
        setError('Could not fetch weather')
      }
      finally{
        setLoading(false)
      }
      
    } 

    
   
  
    
    useEffect(()=>{
      (async()=>{

        try{
        let {status}= await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
          setError('permission to access location was denied')
          return
        }
        
        const location = await Location.geocodeAsync(address);
        setLat(location[0].latitude)
        setLon(location[0].longitude)
        await fetchWeatherData()
        console.log(location)
        
        
      } catch (error) {
        console.error('Error setting location:', error);
        setError('Error setting location');
      }
     
        
      })()
    }, [lat, lon, address])

   

  
    

    if(!loading) {
      (async()=>{
        await fetchWeatherData()
      })
     
    }
    console.log(address)

   
   return[loading, error, weather ];

   
}