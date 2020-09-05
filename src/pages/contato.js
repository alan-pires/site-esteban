import React from 'react'
import Header from '../components/header'
import '../global.css'
import './contato.css'
import Head from '../components/head'

import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
 
function contato() {
    return (
        <> 
         <Head title="Contato"/>
            <Header />
            <section className="mainContato container-fluid">
                <div className="form-container">
                    
                    <h1 className="mt-3 pb-2 text-center">Contacto</h1> 
                    <a href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank" className="linkMaior iconeVerde pt-2"><Whatsapp height="30px" width="30px" style={{color:"green"}} /> ¡Quiero Conversar Ahora!</a>
                    <a className="linkMaior" href="https://www.instagram.com/estebanchalapsico/" target="_blank"><Instagram height="30px" width="30px"  style={{color:"red"}} />Instagram</a>
                    <a className="linkMaior" href="https://www.facebook.com/estebanchalapsico" target="_blank"><FacebookSquare height="30px" width="30px" style={{color:"blue"}} />Facebook</a>
                    <a  href="" className="linkMaior"><EmailOutline className="corDoIconeDoEsteban " height="25px" width="25px" />estebanchalapsico@gmail.com</a>
                    <h3 className="pt-5 mb-3">¿Tienes más dudas? Envia un mensaje.</h3>  

                    <form className="formulario mt-3" action="https://formspree.io/maypzoew" method="POST">
                        <div className="form-group" >
                            <label htmlFor="nome">Nombre:</label>
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Teléfono:</label>
                            <input type="text" className="form-control" id="telefone" name="telefone" placeholder="Teléfono" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensaje:</label>
                            <textarea className="form-control" id="mensagem" name="mensagem" rows="6" placeholder="Tu mensaje" />
                        </div>
                        <button type="submit" class="btn btn-info">ENVIAR</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default contato
