import React, { Component } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      numberOfPokemon: 6
    }
  }

  changePokemonNumber = action =>
    this.setState(prevState => {
      const { numberOfPokemon } = prevState
      if (numberOfPokemon <= 0 && action === 'decrease') return null
      if (numberOfPokemon >= 6 && action === 'increase') return null
      const newNumberOfPokemon =
        action === 'decrease' ? numberOfPokemon - 1 : numberOfPokemon + 1
      return { numberOfPokemon: newNumberOfPokemon }
    })

  render () {
    return (
      <>
        <h1>My Pokemon Team</h1>
        <h5>Number of Pokemon: {this.state.numberOfPokemon}</h5>
        <div className='pokemonButtons'>
          <button onClick={() => this.changePokemonNumber('increase')}>
            Add
          </button>
          <button onClick={() => this.changePokemonNumber('decrease')}>
            Remove
          </button>
        </div>

        <PokemonCard />
      </>
    )
  }
}
