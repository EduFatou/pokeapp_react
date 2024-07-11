import React, { useState } from "react";
import Search from './Search/Search';
import ListaPokemon from "./ListaPokemon/ListaPokemon";


const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  return <section className="home">
    <article>
    <Search setPokemonList={setPokemonList} pokemonList={pokemonList}/>
    <ListaPokemon pokemonList={pokemonList}/>
    </article>
  </section>;
};

export default Home;
