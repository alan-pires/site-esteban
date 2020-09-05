import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import Logo from'./images/logotipo'
import Javeriana from '../images/javeriana.png'
import Brasil from '../images/brazil.png'
import Colombia from '../images/colombia.png'

  
const Header = () => (
  <header className="header-container">
    <div className="logo"> 
        <Logo />
    </div>
    
    <div className="header">
             <ul className="menu">
            <li><Link to='/index-pt'>Home</Link></li>
            <li><Link to='/servicos-pt'>Serviços</Link></li>
            <li><Link to='/areaAtuacao-pt'>Áreas de atuação</Link></li>
            <li><Link to='/contato-pt'>Contato</Link></li>
            <li><Link><a href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank">Quero Conversar</a></Link></li>
            <li><Link to='/'><img src={Colombia} style={{width:33, height:33}}/></Link></li>
            <li><Link to='/index-pt'><img src={Brasil} style={{width:35, height:35}}/></Link></li>
            </ul> 
          <div className="javeriana">
              <img src={Javeriana} alt=""/>
          </div> 
    </div> 
  </header> 
)


export default Header
