import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Img from '../components/images/image'
import '../global.css'
import './areaAtuacao.css'
import Head from '../components/head'
import Whats from '../images/whats.png'


const textos = {
    Depresion: {
        titulo: "Depresión",
        texto: "Tristeza, baja autoestima y presencia de sentimientos de culpa así como pérdida de interés o placer en actividades antes disfrutadas."
    },
    Ansiedad: {
        titulo: "Ansiedad",
        texto: "Irritabilidad, problemas de concentración, miedo constante, preocupación excesiva, angustia y pensamientos descontrolados de carácter negativo."
    },
    CompulsionAlimentar: {
        titulo: "Compulsión Alimentar",
        texto: "Compensación de frustraciones y emociones negativas mediante la alimentación. Períodos que varían donde se come o se bebe sin parar hasta que el deseo de comer pase o no se pueda consumir más. Sentimientos de culpa y vergüenza sobre el uso de alimentos para evitar el estrés emocional."
    },
    CompulsionSexual: {
        titulo: "Compulsión Sexual",
        texto: "Fantasías y comportamientos sexuales (masturbación excesiva, uso exacerbado de pornografia, múltiples parejas sexuales) que aumentan de intensidad y frecuencia con el tiempo causando consecuencias adversas en la vida, incluyendo aspiraciones personales, relaciones interpersonales y actividades profesionales."
    },
    DependenciaQuimica: {
        titulo: "Dependencia Química y Alcoholismo",
        texto: "Fuerte deseo (obsesividad) y compulsión por ingerir substancias, sea alcohol o drogas, fisura o craving, dificultad en controlar el uso en términos de inicio, final y cantidad. Síndrome de abstinencia, continuación del uso inclusive teniendo conciencia de los prejuicios que el mismo trae."
    },
    Toc: {
        titulo: "Transtorno Obsesivo Compulsivo (TOC)",
        texto: "Pensamientos obsesivos, impulsos o imágenes recurrentes y persistentes que son vivenciados como intrusivos y no deseados. Comportamientos compulsivos repetitivos o actos mentales en que una persona se siente obligada a ejecutar en respuesta a una obsesión o de acuerdo con reglas que deben ser cumplidas estrictamente."
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
                <h1 className="text-center pt-3">Especialidades</h1>
                
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
                            <p className="pt-2">{textos.CompulsionAlimentar.texto}</p>
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

