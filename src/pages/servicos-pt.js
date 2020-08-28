import React from 'react'
import Header from '../components/header-pt'
import Footer from '../components/footer-pt'
import Img from '../components/images/image'
import '../global.css'
import './servicos.css'
import Head from '../components/head'


function servicos() {
    return (
        <>
          <Head title="Serviços de psicologia"/>
        <Header />
        <section className="main">
            <h1 className="text-center pt-5">Serviços</h1>
            <div className="servicos-container mt-5">
                <div className="servicos-imagem">
                    <Img imagem="img5" />
                    <div class="alert alert-warning text-center" >
                        Terapia Online 
                    </div>
                </div>
               <div className="servicos-imagem">
                    <Img imagem="img1" />
                    <div class="alert alert-primary text-center" >
                    Terapia Individual
                    </div>
                </div>
                <div className="servicos-imagem">
                     <Img imagem="img2" />
                     <div class="alert alert-success text-center" > 
                    Terapia de Casal
                    </div>
                </div>
                <div className="servicos-imagem">
                    <Img imagem="img3" />
                    <div class="alert alert-danger text-center" >
                    Terapia para LGBT+
                    </div> 
                </div>
                <div className="servicos-imagem">
                     <Img imagem="img4" />
                     <div class="alert alert-dark text-center" >
                    Terapia Sexual
                    </div>
                </div>
            </div>
        </section>        
          <Footer/>       
    </>
    )
}

export default servicos