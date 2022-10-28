import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
    const [ready, setReady] = useState(false);
const [temperature, setTemperature] = useState(null);

function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
}

if (ready) {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" 
                placeholder="Enter a city..." 
                className="form-control" 
                autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 01:58pm</li>
                <li>Mostly Cloudy</li>
            </ul>
            
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix ">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" 
                    alt="Mostly Cloudy"
                    className="float-left"
                    />
                   <span className="temperature">{}</span>
                   <span className="unit">°C</span>
                   </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 3%
                        </li>
                        <li>
                            Humidity: 83%
                        </li>
                        <li>
                            Wind: 2 km/h
                        </li>
                    </ul>
                </div>
            </div>
            </div>
    );
} else {
    let apiKey="8cfa4dd3ccafa97ae01716474ab8d486";
    let city = "New York";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}


}