import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonListContext } from '../../../context/PokemonListContext';

const Details = () => {

  const {pokemonList} = useContext(PokemonListContext)
  const pokemonID = useParams();

  const [pokemon] = pokemonList.filter(item => item.id == pokemonID.id);
  console.log(pokemonID)

  return <section className="details">
    <article className='card'>
    <div className="info">
      <p>Name: {pokemon.species.name}</p>
      <p>ID: {pokemon.id}</p>
      <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      </div>
      <img src={pokemon.sprites.other['official-artwork'].front_default || defaultImage} alt={pokemon.name} className="img-card" />
    </article>
    <article className='info'>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </article>
  </section>
};

export default Details;
