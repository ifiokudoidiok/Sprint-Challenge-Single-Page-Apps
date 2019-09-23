import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from "./components/CharacterList.js";
import { Route } from 'react-router-dom';
import axios from 'axios';


export default function App() {
  
  return (
    <main>
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route path="/characters" component={CharacterList} />		
		</main>
  );
}
