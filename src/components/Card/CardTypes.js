import React from 'react'
import './Card.css'


export const CardTypes = ({ type }) => {
    return (
        <div className="card"> 
            <div className="card-name">
                {type.pokemon.name}
            </div>
            <div className="card-img">
                <img alt='pokemon'/>
            </div>
           
            <div className="card-types">
                
            </div>
            <div className="card-info">
                <div className="card-data">
                    <p className="title">Poids</p>
                    <p>{}</p>
                
                    <p className="title">Taille</p>
                    <p>{}</p>
                </div>
                <div className="card-data">
                    <p className="title">Abilités</p>
                    
                </div>
            </div>
        </div>
    )
}
