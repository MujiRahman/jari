import React from 'react'
import pokemon from '../assets/pokemon.png'

function Navbar({listPokemon, listFavorit}) {
  return (
    <div className='flex justify-between p-5 bg-white border-b-2 items-center md:justify-around fixed w-full'>
        <img src={pokemon} alt='home-pokemon' className='w-12 h-12 rounded-lg' />
        <div className='flex text-base gap-4 md:gap-16'>
            <h3 onClick={()=>listPokemon()}>List Pokemon</h3>
            <h3 onClick={()=>listFavorit()}>List Favorit</h3>
        </div>
    </div>
  )
}

export default Navbar