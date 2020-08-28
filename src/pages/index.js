import React from "react"
import { Link } from "gatsby"
import Header from "../components/header" 
import SEO from "../components/seo"
import '../global.css'
import './index.css'
import Terapia from '../components/images/image'
import Esteban from '../images/esteban3.png'
import Footer from '../components/footer'
import Head from '../components/head'

const IndexPage = () => (
  <>
  <Head title="Home"/>
    <Header />
    <section className="mainIndex">

      <div className="imagem-terapia">
        <Terapia imagem="terapia" /> 
      </div>

      <div className="sobreEsteban">
              <div className="imagemEsteban"> 
                <img src={Esteban} className="fotoEsteban rounded-circle" />
              </div>
              <div className="descricaoEsteban">
                <p>Psicólogo clínico bilingüe (español-português) graduado de la <i>Pontificia Universidad Javeriana de Bogotá</i>, Colombia, con enfoque en Psicoterapia Psicoanalítica para tratamientos de Dependência Química e Alcoholismo
                   Compulsiones, Depresión, Ansiedad y TOC. </p>
              </div>
      </div>

      <div className="informacoesContainer pl-1 pt-4">
        <div className="sobreTerapia letraCelular">
          <p><strong>¿Cómo funciona la terapia online?</strong></p>
          <p>El psicólogo online es una práctica de psicoterapia por medio de herramientas actuales, en este caso
          internet. Utilizamos la herramienta Zoom, Skype u otro recurso tecnológico para hacer las
            sesiones.</p>
        </div>
        <div className="sobreTerapia letraCelular">
          <p><strong>Tiempo</strong></p>
          <p>Cada atendimiento es de 50 minutos.</p>
          <p><strong>¿Quién puede recibir esta atención?</strong></p>
          <p>Personas entre los 18 y 60 años.</p>
        </div>


        <div className="sobreTerapia letraCelular">
          <p><strong>Secreto</strong></p>
          <p>Todas la informaciones transmitidas son mantenidas con reserva. Los servicios realizados están
                  sometidos al código de ética profesional del psicólogo.</p>
        </div>

        <div className="sobreTerapia letraMenor letraCelular">
          <p><strong>¡Agenda tu consulta online!</strong></p>
          <p>1 - Entra en contacto por WhatsApp <strong><a href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank">(+55) 1199010-5998</a></strong> y agenda tu consulta.</p>
          <p>2- Realiza el pago y envía el comprobante.</p>
          <p>3- Instala la herramienta de videoconferencia. Recuerda que es necesario autorizar la cámara y el micrófono
            de tu dispositivo.</p>
          <p>4- ¡Ahora es necesario solamente aguardar la llamada!</p>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage
