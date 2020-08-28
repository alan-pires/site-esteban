import React from 'react'
import Image from './images/image'
import './imagensDesc.css'

function ImagensInvert(props) {
    return (
        <div className="imagensDescContainer">
            <div className="descricao">
                <strong>{props.titulo}</strong>
                <p>{ props.texto}</p>
            </div>
            <div className="imagem">
                <Image imagem={props.imagem}/>
            </div> 
        </div>  

    )
}
 
export default ImagensInvert