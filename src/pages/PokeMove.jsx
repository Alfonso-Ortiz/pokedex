import React from 'react'
import './styles/pokeMove.css'


const PokeMove = ({move}) => {
  return (
      <section className='poke-move'>
          <h3 className='poke-move__name'>{move.move.name}</h3>    
      </section>
  )
}

export default PokeMove