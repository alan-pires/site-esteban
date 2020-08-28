import React from 'react'
import Header from '../components/header'

import {Link} from 'gatsby'
import Head from '../components/head'
import ImagemPost from '../images/post1.jpg'
import '../global.css'
import './blog.css'  

 const BlogPage = () => { 
  
    return (
        <>  
        <Head title="Blog Psicologia"/> 
        <Header />
        <section className="blogContainer mt-1 pl-2">
                <h2 className="text-center">Bienvenidos al Blog de Esteban</h2>
                <h3 className="text-center">¡Hola a todos y todas! </h3>
                <p className="pt-2">Este es un espacio creado para compartir experiencias, conocimiento y aprendizaje sobre psicoanálisis, psicoterapia y mucho más. Si tienes algún interés específico sobre algún tema que quieras profundizar, házmelo saber y con gusto lo analizaremos.</p>
                <p>Nuestro primer tema para abordar será el de Compulsión Sexual. ¡No dejes de visitarnos pues tendremos varios puntos interesantes para reflexionar y analizar!</p>
                <p>Envíame tu comentario para <strong>estebanchalapsico@gmail.com</strong> y con gusto lo responderé.</p>
                <div className="imagemPost1">
                     <img src={ImagemPost} alt="imagemPost" /> 
                </div>
        </section>                     
       </>
    )
}

export default BlogPage
