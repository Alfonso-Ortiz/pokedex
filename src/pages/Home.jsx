import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import "./styles/home.css"

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerGlobal(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate("/pokedex")
  }

  return (
    <div className='home'>
      <img className='home__img' src="/Home/pokedex.png" alt="" />
      <h1 className='home__title'>¡Hi trainer!</h1>
      <p className='home__subtitle'>Give me your name to start</p>
      <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' id="name" placeholder='Your name' type="text" />
        <button className='home__btn'>Start</button>
      </form>
      <div className='home__red'></div>
      <div className='home__black'></div>
    </div>
  )
}

export default Home
