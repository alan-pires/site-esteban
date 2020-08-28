import React from 'react'
import Image from './images/image'
import './imagensDesc.css'

function ImagensDesc(props) {
    return (
        <div className="imagensDescContainer">
            <div className="imagem">
                <Image imagem={props.imagem}/>
            </div>
            <div className="descricao">
                <strong>{props.titulo}</strong>
                <p>{ props.texto}</p>
            </div>
        </div> 

    )
}
 
export default ImagensDesc