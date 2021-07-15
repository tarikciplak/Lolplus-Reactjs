import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import StaticsBar from './components/StaticsBar';
import Logo from './image/logo2.png'
import bg from './image/bf.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MatchesBar } from './components/MatchesBar';
import SummonerNotFound from './components/SummonerNotFound';



export default function App() {
  const [nickname, setNickname] = useState(null)
  const [region, setRegion] = useState(null)



  return (
   
      <div style={{ backgroundImage: `url(${bg})` }} className="h-screen relative">

        <div className="ml-5 mt-5 absolute">
          <a href="/"><img src={Logo}></img></a>
        </div>
        <Router >

          <Route path="/" exact render={() => (<SearchBar setNickname={setNickname} />)} />          
          <Route path="/summoner/:nickname" render={() => (<StaticsBar nickname={nickname} />)} />
          <Route path="/summoner/:nickname/matches"  render={() => (<MatchesBar nickname={nickname} />)} />
          

        </Router>

      </div>

    
  );


}





