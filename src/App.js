// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import ListPokemon from './component/listPokemon';
import ListFavorit from './component/listFavorit';
import { useState } from 'react';

function App() {
  const [list, setList] = useState(true)
  return (
    <div >
      <Navbar 
      listPokemon={()=> setList(true)}
      listFavorit={()=> setList(false)}
      />
      {
        list ? 
        <ListPokemon /> :
        <ListFavorit />
      }
    </div>
  );
}

export default App;
