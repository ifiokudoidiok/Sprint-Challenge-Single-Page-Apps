import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import axios from 'axios';


export default function App() {
  const [characters, setCharacters] = useState([])
	useEffect(() => {
		// axios.get('https://rickandmortyapi.com/api/character/')
		.then(res => {
      // debugger
      setCharacters(res.data.results);
      console.log(res.data.results)
		})
		.catch(error => {
      debugger
      console.error(error)})
		return () => {
			console.log('cleanup')
		};
	}, [])
  return (
    <main>
      {people
      ? 
      people.map(person => <Person data={person} key={person.url} />)
      :
       null}
      <Header />
      <WelcomePage/>
    </main>
  );
}
