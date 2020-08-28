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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/servicos'>Servicios</Link></li>
            <li><Link to='/areaAtuacao'>Especialidades</Link></li>
            <li><Link to='/contato'>Contacto</Link></li>
            <li><Link to='/BlogPage'>Blog</Link></li>
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
