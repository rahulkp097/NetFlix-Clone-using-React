import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,ActionMovies,horrorMovies,comedyMovies,Documentaries, trending} from './Urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost Url={originals} title="Netflix Originals"  />
      <RowPost Url={trending} title="Trending" isSmall />
      <RowPost Url={ActionMovies} title="Action" isSmall />
      <RowPost Url={comedyMovies} title="Comedy" isSmall />
      <RowPost Url={horrorMovies} title="Horror" isSmall />
      <RowPost Url={Documentaries} title="Documentary" isSmall />
    </div>

    
  );
}

export default App;
