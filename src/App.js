import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action, horror, originals, romance, trending } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>

    </div>
  );
}

export default App;
