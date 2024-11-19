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
    this.loadingDiv = <div className="pokemonCard">Loading...</div>
  }

  componentDidMount () {
    const randomPokemonId = Math.ceil(Math.random() * 1025)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
      .then(response => response.json())
      .then(data => this.setState({
        pokemon: {
          name: data.name,
          image: data.sprites.front_default
        }
      }))
  }

  render () {
    if (!this.state.pokemon.name && !this.state.pokemon.image) return this.loadingDiv

    return (
      <div className="pokemonCard">
        <h1>{this.state.pokemon.name}</h1>
        <img src={this.state.pokemon.image} alt={this.state.pokemon.name} />
      </div>
    )
  }
}
