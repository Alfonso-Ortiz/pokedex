import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
      <header>
        <img
          className="poke-info__img"
          src={pokemon?.sprites.other['official-artwork'].front_default}
          alt=""
        />
      </header>
      <h3>#{pokemon?.id}</h3>
      <h2>{pokemon?.species.name}</h2>

      <div>
        <div>
          <p>Weight</p>
          <p>{pokemon?.weight}</p>
        </div>
        <div>
          <p>Height</p>
          <p>{pokemon?.height}</p>
        </div>
      </div>

      <div>
        <div>
          <h2>Type</h2>
          <div>
            <p>{pokemon?.types[0].type.name}</p>
            <p>{pokemon?.types[1].type.name}</p>
          </div>
        </div>
        <div>
          <h2>Abilities</h2>
          <div>
            <p>{pokemon?.abilities[0].ability.name}</p>
            <p>{pokemon?.abilities[1].ability.name}</p>
          </div>
        </div>
      </div>

      <div>
        <h2>Stats</h2>
        <ul>
          <li>{pokemon?.stats[0].stat.name}</li>
          <li>{pokemon?.stats[0].base_stat}</li>
        </ul>
      </div>
    </article>
  )
}

export default PokedexInfo
