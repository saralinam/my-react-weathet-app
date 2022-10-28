import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (<div className="App">
    <div className="container">
      
      <Weather />
<footer>
  This project was coded by  Sara Mouwakee and is {" "}
  <a href="https://github.com/Sara-mwk/my-react-weathet-app" 
  target="_blank" 
  rel="noopener"
   >open sourced on GitHub</a>
</footer>
</div>
    </div>);
}

