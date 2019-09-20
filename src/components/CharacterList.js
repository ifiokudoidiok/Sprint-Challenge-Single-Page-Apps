import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import axios from "axios";
export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(error => console.error(error));
    return () => {
      setCharacters([]);
    };
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    let searchQuery =
      "?" +
      Object.keys(search)
        .map(key => key + "=" + search[key])
        .join("&");
    axios
      .get(`https://rickandmortyapi.com/api/character/${searchQuery}`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(error => console.error(error));
    return () => {
      setCharacters([]);
    };
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [search.name, search.gender, search.species]);

  const characterList = searchResults.length > 0 ? searchResults : characters;
  return (
    <section className="character-list">
      <SearchForm search={search} setSearch={setSearch} />
      <h2>Character List</h2>
      {characterList.map(character => (
        <CharacterCard key={character.id} data={character} />
      ))}
    </section>
  );
}
