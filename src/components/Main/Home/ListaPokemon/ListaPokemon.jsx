import React from "react";
import Card from "../Search/Card";
import Search from "../Search";

const ListaPokemon = ({ pokemonList }) => {
  return <div>
    {pokemonList.map((pokemon) => (
        <Card
          dataName={pokemon.species.name}
          dataNumber={pokemon.id}
          dataType={pokemon.types.map(type => type.type.name).join(', ')}
          dataImg={pokemon.sprites.other.dream_world.front_default}
          key={pokemon.id}
        />
      ))}
  </div>;
};

export default ListaPokemon;
