import { useState, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { PokemonListContext } from './context/PokemonListContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const [pokemonList, setPokemonList] = useState([])

  const updatePokemonList = (newPokemon) => {
    setPokemonList(newPokemon)
  };
  const listData = { pokemonList, updatePokemonList}
  
  return (
    <>
    <PokemonListContext.Provider value={listData}>
        <BrowserRouter >
          <Header />
          <Main />
        </BrowserRouter>
        </PokemonListContext.Provider>

        <Footer />
      

    </>
  )
}

export default App
