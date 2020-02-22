import React from 'react'
import './BtnNav.css'

export const BtnNav = ({prevUrl, nextUrl, prev, next}) => {
    return (
        <div className='container-btn'>
            {prevUrl ? <button onClick={prev}>Précédent</button> : null}
            {nextUrl ? <button onClick={next}>Suivant</button> : null}
        </div>
    )
}
