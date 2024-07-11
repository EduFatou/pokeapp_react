import React, { useEffect, useState, useContext } from 'react';
import { PokemonListContext } from '../../../../context/PokemonListContext'
import Card from './Card';
import axios from 'axios'
import defaultImage from '../../../../../src/assets/8wkuxg.jpg';


const Search = () => {

  const [value, setValue] = useState(null);// Para guardar el dato a buscar
  const [info, setInfo] = useState([]);
  const {pokemonList, updatePokemonList} = useContext(PokemonListContext)

  useEffect(() => {
    async function fetchData() {
      if (!value){
        return;
      
      } else if (pokemonList.some(item => item.name == value)) {
        alert('Ya está en la lista')
      } else {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`);
          const json = res.data;
          
          setInfo(json);
          updatePokemonList([...pokemonList, json]);
        } catch (e) {
          setInfo([]) // No pintes nada 
        }
      }
    }


    fetchData();
  }, [value]); // componentDidUpdate. listener



  const renderCards = () => {
    return (
      <Card
        dataName={info.species.name}
        dataNumber={info.id}
        dataType={info.types.map(type => type.type.name).join(', ')}
        dataImg={info.sprites.other['official-artwork'].front_default || defaultImage}
        key={info.id}
      />
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.pokemon.value)
    e.target.pokemon.value = '';
  };


  return <section className='search'>
    <form className='form' onSubmit={handleSubmit}>
      <input className='input' type='text' name='pokemon' />
      <button className='button'>Search</button>
    </form>
    <div className='result'>
    {info.length !== 0 ? renderCards() : ''}
    </div>
  </section>
};

export default Search;
