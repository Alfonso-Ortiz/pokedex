import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PokeMove from './PokeMove'
import PokeStats from './PokeStats'
import './styles/pokedexInfo.css'

const PokedexInfo = () => {
  const { id } = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err))
  }, [id])

  console.log(pokemon)

  return (
    <article className="poke-info">
      <article className="poke-card__info">
        <header className='poke-info__header'>
          <img
            className="poke-info__img"
            src={pokemon?.sprites.other['official-artwork'].front_default}
            alt=""
          />
        </header>
        <h3 className={`poke-info__id color-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h3>
        <h2 className={`poke-info__name color-${pokemon?.types[0].type.name}`}>{pokemon?.species.name}</h2>

        <section className='poke-info__body'>
          <div className='poke-info__features'>
            <span className='poke-feature__name'>Weight</span>
            <h3 className='poke-features__number'>{pokemon?.weight}</h3>
          </div>
          <div className='poke-info__features'>
            <span className='poke-feature__name'>Height</span>
            <h3 className='poke-features__number'>{pokemon?.height}</h3>
          </div>
        </section>

        <section className='poke-info__info'>
          <div className='poke-type'>
            <h2 className='poke-type__title'>Type</h2>
            <div className='poke-type__info'>
              <span className={`poke-type__name bg-${pokemon?.types[0].type.name}`}>{pokemon?.types[0].type.name}</span>
              <span className={`poke-type__name bg-${pokemon?.types[1].type.name}`}>{pokemon?.types[1].type.name}</span>
            </div>
          </div>
          <div className='poke-abilities'>
            <h2 className='poke-abilities__title'>Abilities</h2>
            <div className='poke-abilities__info'>
              <span className='poke-abilities__name'>{pokemon?.abilities[0].ability.name}</span>
              <span className='poke-abilities__name'>{pokemon?.abilities[1].ability.name}</span>
            </div>
          </div>
        </section>

        <section className='poke-info__stats'>
          <h2 className='poke-info__stats-title'>Stats</h2>
          <ul className='poke-info__list'>
            {pokemon?.stats.map((stat) => (
              <PokeStats key={stat.stat.name} stat={stat} pokemon={pokemon}/>
            ))}
          </ul>
        </section>
      </article>

      <section className='poke-info__move'>
          <h2 className='poke-move__title'>Movements</h2>
          {pokemon?.moves.map((move) => (
            <PokeMove key={move.move.name} move={move} />
          ))}
        </section>
    </article>
  )
}

export default PokedexInfo
