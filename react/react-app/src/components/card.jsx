import React from 'react'
import './card.css'
export const Card = (props) => {
    return (
        <div>
      <div id='dev'>
        <img src={props.image} alt='Cartoon' height={200} width={200}/>
        <h1>{props.name}</h1>
        <h3>Rate : ${props.rate}</h3>
      </div>
    </div>

    )
}