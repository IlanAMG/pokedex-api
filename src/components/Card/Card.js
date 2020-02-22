import React from 'react'
import './Card.css'

import TypesColor from '../../helpers/TypesColor';

export const Card = ({ pokemon }) => {
    return (
        <div className="card"> 
            <div className="card-name">
                {pokemon.name}
            </div>
            <div className="card-img">
                <img src={pokemon.sprites.front_default} alt='pokemon'/>
            </div>
           
            <div className="card-types">
                {pokemon.types.map(type => {
                    return (
                        <div key={type.type.name} style={{backgroundColor: TypesColor[type.type.name]}} className="card-type">
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="card-info">
                <div className="card-data">
                    <p className="title">Poids</p>
                    <p>{pokemon.weight}</p>
                
                    <p className="title">Taille</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="card-data">
                    <p className="title">Abilités</p>
                    {pokemon.abilities.map(ability => {
                        return (
                            <p key={ability.ability.name}>
                                {ability.ability.name}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
