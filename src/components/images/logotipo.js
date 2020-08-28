import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {  
  const logo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth:300, maxHeight: 180) {
            ...GatsbyImageSharpFluid
          }
        } 
      }
    }
  `)

  return <Img fluid={logo.placeholderImage.childImageSharp.fluid} />
}

export default Logo
 