import React, { Component } from 'react'
import './PokemonCard.css'

export default class PokemonCard extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: {
        name: '',
        image: ''
      }
    }
  }

  async componentDidMount () {

  }

  render () {
    const loadingDiv = <div className = "pokemonCard">Loading...</div>
    if (!this.state.pokemon) return loadingDiv
    if (!this.state.pokemon.name) return loadingDiv

    return (
      <div className="pokemonCard">
        <h1>{this.state.pokemon.name}</h1>
        <img src={this.state.pokemon.image} alt={this.state.pokemon.name} />
      </div>
    )
  }
}
