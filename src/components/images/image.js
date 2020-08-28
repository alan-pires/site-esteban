import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {

  const { terapia, imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8, imagem9, imagem10, imagem11 } = useStaticQuery(graphql`
    query {
      terapia: file(relativePath: { eq: "sofa3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }   
      imagem1: file(relativePath: { eq: "imagem1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }       
      imagem2: file(relativePath: { eq: "imagem2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagem3: file(relativePath: { eq: "imagem3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagem4: file(relativePath: { eq: "imagem4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }    
      imagem5: file(relativePath: { eq: "imagem5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        } 
      } 
      imagem6: file(relativePath: { eq: "imagem6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }   
      imagem7: file(relativePath: { eq: "imagem7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }       
      imagem8: file(relativePath: { eq: "imagem8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagem9: file(relativePath: { eq: "imagem9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imagem10: file(relativePath: { eq: "imagem10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }    
      imagem11: file(relativePath: { eq: "imagem11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        } 
      }   
    }
  `)

  return (
    <>
      {(() => {
        switch (props.imagem) {
          case 'img1':
            return <Img fluid={imagem1.childImageSharp.fluid} />
          case 'img2':
            return <Img fluid={imagem2.childImageSharp.fluid} />
          case 'img3':
            return <Img fluid={imagem3.childImageSharp.fluid} />
          case 'img4':
            return <Img fluid={imagem4.childImageSharp.fluid} />
          case 'img5':
            return <Img fluid={imagem5.childImageSharp.fluid} />
          case 'terapia':
            return <Img fluid={terapia.childImageSharp.fluid} />
          case 'img6':
            return <Img fluid={imagem6.childImageSharp.fluid} />
          case 'img7':
            return <Img fluid={imagem7.childImageSharp.fluid} />
          case 'img8':
            return <Img fluid={imagem8.childImageSharp.fluid} />
          case 'img9':
            return <Img fluid={imagem9.childImageSharp.fluid} />
          case 'img10':
            return <Img fluid={imagem10.childImageSharp.fluid} />
          case 'img11':
            return <Img fluid={imagem11.childImageSharp.fluid} />
          default:
            return null;
        }
      })()}
    </>

  )
}

export default Image



