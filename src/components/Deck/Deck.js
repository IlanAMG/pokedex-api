import React from 'react'
import './Deck.css'
import { Card } from '../Card/Card';

export const Deck = ({ pokemonData }) => {
    
    
    return (
        <div className="container-grid">
            {pokemonData.map((pokemon, id) => {
                return <Card key={id} pokemon={pokemon} />
            })
            }
        </div>
    )
}
