import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (<div className="App">
    <div className="container">
      
      <Weather defaultCity="Omaha"/>
<footer>
  This project was coded by <a href="https://beautiful-alfajores-edee7a.netlify.app/" target="_blank" rel="noopener noreferrer">Sara Mouwakee</a>  and is {" "}
  <a href="https://github.com/Sara-mwk/my-react-weathet-app" target="_blank" rel="noopener noreferrer"
>open sourced on GitHub</a> and <a href="https://marvelous-kashata-ae78d0.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
</footer>
</div>
    </div>);
}

