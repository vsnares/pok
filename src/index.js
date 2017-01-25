import React from 'react'
import ReactDOM from 'react-dom'
import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'
import AddPokemonCard from './components/AddPokemonCard'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciy1ldgjy0nig0136bhuqzhvb'}),
  dataIdFromObject: o => o.id
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={Pokedex} />
      <Route path='/view/:pokemonId' component={PokemonPage} />
      <Route path='/create/:trainerId' component={AddPokemonCard} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
