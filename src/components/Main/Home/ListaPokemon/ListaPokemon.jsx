import React, { useContext } from "react";
import Card from "../Search/Card";
import { PokemonListContext } from "../../../../context/PokemonListContext";
import defaultImage from '../../../../../src/assets/8wkuxg.jpg'

const ListaPokemon = () => {

  const {pokemonList} = useContext(PokemonListContext)
  return <div className="listaPokemon">
    {pokemonList.map((pokemon) => (
        <Card
          key={pokemon.id}
          dataName={pokemon.species.name}
          dataNumber={pokemon.id}
          dataType={pokemon.types.map(type => type.type.name).join(', ')}
          dataImg={pokemon.sprites.other.dream_world.front_default || defaultImage}
        />
      ))}
  </div>;
};

export default ListaPokemon;
