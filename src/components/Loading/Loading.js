import React from 'react'
import './Loading.css'
import spinner from '../../spinner.svg'

export const Loading = () => {
    return (
        <img src={spinner} alt='loading'/>
    )
}
