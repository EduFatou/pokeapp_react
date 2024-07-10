import React, { useEffect, useState } from 'react';
import Details from '../../Details';
import Card from './Card';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';


const Search = ({ setPokemonList, pokemonList }) => {

  const [value, setValue] = useState(null);// Para guardar el dato a buscar
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!value){
        return;
      
      } else if (pokemonList.some(item => item.name == value)) {
        alert("Ese pokemon ya está en la lista")
      } else {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}/`);
          const json = res.data;

          setInfo(json);
          setPokemonList([...pokemonList, json]);
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
        dataImg={info.sprites.other['official-artwork'].front_default}
        key={uuidv4()}
      />
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValue(e.target.pokemon.value)
    e.target.pokemon.value = '';
  };


  return <section className="search">
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemon" />
      <button>Search</button>
    </form>
    <div className='result'>
    {info.length !== 0 ? renderCards() : <p>Loading...</p>}
    </div>
  </section>
};

export default Search;
