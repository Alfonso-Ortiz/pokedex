import React from 'react'
import './styles/pokeStats.css'

const PokeStats = ({ stat, pokemon }) => {
  return (
    <li className="poke-stats__container ">
      <div className="poke-stats ">
        <div className="info">
          <h4 className="poke-stats__name ">
            <span className="poke-stats__list "></span>
            {stat.stat.name}:
          </h4>
          <span className={`poke-stats__number porcentaje`}>
            {stat.base_stat}/150
          </span>
        </div>
        <div className="barra">
          <div style={{gridColumn:`span ${stat.base_stat}`}} id="html" className={`barra-progreso bg-${pokemon?.types[0].type.name}`}></div>
        </div>
      </div>
    </li>
  )
}

export default PokeStats
