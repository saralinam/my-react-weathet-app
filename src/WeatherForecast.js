import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast () {
    return (
        <div className="WeatehrForecast">
         <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu </div> 
                <WeatherIcon code="01d"/>
               <div className="WeatherForecast-temperature"> 
              <span className="WeatherForecast-max">19 </span>
              <span className="WeatherForecast-min">10 </span> 
               </div>
            </div>
         </div>
        </div>
    )
}