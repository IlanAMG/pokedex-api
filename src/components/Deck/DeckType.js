import React from 'react'
import './Deck.css'
import { Card } from '../Card/Card';

export const DeckTypes = ({ pokemonByType }) => {
    
    
    return (
        <div className="container-grid">
            {pokemonByType.map((pokemon, id) => {
                return <Card key={id} pokemon={pokemon} />
            })
            }
        </div>
    )
}