import React from 'react'
import Logo from './images/logotipo'
import {Email} from '@styled-icons/material'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'

import './footer.css'

function footer() {
    return (
        <div className="rodape">
            <div className="logoFooter">
            <Logo />
            </div>
            <div className="contato">
                <h4>¡Agenda una consulta!</h4>
                <a className="pt-3 linkMaiorFooter" href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank"><Whatsapp className="icone" />WhatsApp: (11) 99010-5998</a> 
                <p className="pt-2"><Email className="icone" />Email: estebanchalapsico@gmail.com</p>
            </div>
        </div>
    )
}
 
export default footer
