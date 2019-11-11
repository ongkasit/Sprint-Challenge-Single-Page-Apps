import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      console.log(res);
      setCharacters(res.data.results);
    })
    .catch(error => {
      console.log(error);
    });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map((char) => {
        console.log(char)
        return (
      <CharacterCard key={char.id}
                    name={char.name}
                    image={char.image}
                    status={char.status}
                    species={char.species}
                    location={char.location}
                    origin={char.origin}
      />
      )
      })}
    </section>
  );
}
