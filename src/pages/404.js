import React from "react"

import {Link} from "gatsby"
import SEO from "../components/seo"
import './404.css'

const NotFoundPage = () => (
  <div className="main404">
    <SEO title="404: Not found" />
    <h1>No encontrado</h1>
    <h2><Link to="/">Regresar a Home</Link></h2>
    </div> 
)

export default NotFoundPage
