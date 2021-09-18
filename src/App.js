import React from 'react';
import './App.css';
import Home from "./Primoshop/Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "10px", marginLeft: "700px", marginRight: "550px",}}>                     
        <h1>TOKO GACHA</h1>
        <h3>"Kelompok 07, ayo beli Primogem buat Gacha Genshin"</h3>
        <div style={{ border: "5px solid black" }}>         
        <Home />
        </div>
        </div>
      </div>
    )
  }
}

export default App;