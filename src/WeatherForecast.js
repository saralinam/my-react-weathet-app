import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForeacst(props) {
   let [loaded, setLoaded] = useState(false); 
   let [forecast, setForecast] = useState(null); 
    
   function handleResponse(response) {
    setForecast(response.data.daily)
    setLoaded(true);
   }
    

    if(loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                  {forecast.map(function(daylyForecast, index) {
                      if (index < 6) {
                        
                        return (
                            <div className="col" key={index}>
                                
                            <WeatherForecastDay data={daylyForecast} />
                          </div>   
                        );
                      }
                  })}

                  
                </div>
            </div>
        );

       
    } else {
        let apiKey="8cfa4dd3ccafa97ae01716474ab8d486";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
    
}