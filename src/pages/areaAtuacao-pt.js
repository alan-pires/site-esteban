import React from 'react'
import Header from '../components/header-pt'
import Footer from '../components/footer-pt'
import Img from '../components/images/image'
import '../global.css'
import './areaAtuacao.css'
import Head from '../components/head'
import Whats from '../images/whats.png'


const textos = {
    Depresion: {
        titulo: "Depressão",
        texto: "Tristeza, baixa autoestima e presença de sentimentos de culpa assim como perda de interesse ou prazer em atividades antes apreciadas."
    },
    Ansiedad: {
        titulo: "Ansiedade",
        texto: "Nervosismo, problemas de concentração, medo constante, preocupação exagerada, irritabilidade e pensamentos descontrolados de caráter negativo."
    },
    CompulsionAlimentar: {
        titulo: "Compulsão Alimentar",
        texto: "Compensação das frustrações e emoções negativas na alimentação, períodos variáveis em que se come ou bebe sem parar até que o desejo de comer passe ou não se consiga mais consumir. Sentimentos de culpa e vergonha sobre o uso de alimentos para evitar o estresse emocional. "
    },
    CompulsionSexual: {
        titulo: "Compulsão Sexual",
        texto: "Fantasias e comportamentos sexuais (masturbação excessiva, uso excessivo de pornografia, múltiplos parceiros sexuais ocasionais) que aumentam de intensidade e frequência ao longo do tempo causando consequências adversas na vida, incluindo as aspirações pessoais, relações interpessoais, e atividades profissionais."
    },
    DependenciaQuimica: {
        titulo: "Dependencia Química e Alcoolismo",
        texto: "Forte desejo (obsessão) e compulsão pela substância seja álcool e/ou drogas, fissura ou craving, dificuldade em controlar o uso em termos de início, término e quantidade. Síndrome de abstinência, continuidade do uso mesmo ciente dos prejuízos que ele traz. "
    },
    Toc: {
        titulo: "Transtorno Obsesivo Compulsivo (TOC)",
        texto: "Pensamentos obsessivos, impulsos ou imagens recorrentes e persistentes que são vivenciados como intrusivos e indesejados. Comportamentos compulsivos repetitivos ou atos mentais em que uma pessoa se sente obrigada a executar em resposta a uma obsessão ou de acordo com regras que devem ser aplicadas rigidamente."
    }
}
function areaAtuacao() {

    return (
        <>
        <Head title="Especialidades"/>
            <Header />
            <section className="main">
            <div className="whatsFixed">
        <a href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank"><img src={Whats} /></a>
        </div>
                <h1 className="text-center pt-3">Áreas de Atuação</h1>
                
                 <div className="areasAtuacao-container mt-3"> 

                    <div className="imagensDescContainer descricaoPequena">
                        <div className="imagem">
                            <Img imagem="img6" />
                        </div>
                        <div className="descricao ">
                            <strong >{textos.Ansiedad.titulo}</strong>
                            <p className="pt-3">{textos.Ansiedad.texto}</p>
                        </div>
                    </div>
   
                    {/* ===========================================================*/}
                    <div className="imagensDescContainer descricaoPequena">
                        <div className="descricao cima">
                            <strong>{textos.Depresion.titulo}</strong>
                            <p className="pt-3">{textos.Depresion.texto}</p>
                        </div>
                        <div className="imagem">
                            <Img imagem="img7" />
                        </div>
                        <div className="descricao baixo">
                            <strong>{textos.Depresion.titulo}</strong>
                            <p className="pt-3">{textos.Depresion.texto}</p>
                        </div>
                    </div>

                    <div className="imagensDescContainer descricaoGrande">
                        <div className="imagem">
                            <Img imagem="img8" />
                        </div>
                        <div className="descricao">
                            <strong>{textos.CompulsionSexual.titulo}</strong>
                            <p className="pt-2">{textos.CompulsionSexual.texto}</p>
                        </div>
                    </div>

                     {/* ===========================================================*/}
                    <div className="imagensDescContainer descricaoGrande">
                        <div className="descricao cima">
                            <strong>{textos.DependenciaQuimica.titulo}</strong>
                            <p className="pt-3">{textos.DependenciaQuimica.texto}</p>
                        </div>
                        <div className="imagem">
                            <Img imagem="img9" />
                        </div>
                        <div className="descricao baixo">
                            <strong>{textos.DependenciaQuimica.titulo}</strong>
                            <p className="pt-3">{textos.DependenciaQuimica.texto}</p>
                        </div>
                    </div> 

                    <div className="imagensDescContainer descricaoGrande">
                        <div className="imagem">
                            <Img imagem="img10" />
                        </div>
                        <div className="descricao">
                            <strong>{textos.CompulsionAlimentar.titulo}</strong>
                            <p className="pt-3">{textos.CompulsionAlimentar.texto}</p>
                        </div>
                    </div>

                      {/* ===========================================================*/}
                    <div className="imagensDescContainer descricaoGrande">
                        <div className="descricao cima">
                            <strong>{textos.Toc.titulo}</strong>
                            <p className="pt-2">{textos.Toc.texto}</p>
                        </div>
                        <div className="imagem">
                            <Img imagem="img11" />
                        </div>
                        <div className="descricao baixo">
                            <strong>{textos.Toc.titulo}</strong>
                            <p className="pt-2">{textos.Toc.texto}</p>
                        </div>
                    </div>



                </div>
            </section>
            <Footer />
        </>
    )
}

export default areaAtuacao
