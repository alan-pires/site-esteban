import React from "react"
import { Link } from "gatsby"
import Header from "../components/header-pt" 
import SEO from "../components/seo"
import '../global.css'
import './index.css'
import Terapia from '../components/images/image'
import Esteban from '../images/esteban3.png'
import Footer from '../components/footer-pt'
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
                <p>Psicólogo clínico bilíngue (espanhol-português) formado pela <i>Pontificia Universidad Javeriana de Bogotá</i>, Colômbia, com foco em Psicoterapia Psicanalítica para tratamento de Dependência Química e Alcoolismo, Compulsões, Depressão, Ansiedade e TOC.  </p>
              </div>
      </div>

      <div className="informacoesContainer pl-1 pt-4">
        <div className="sobreTerapia letraCelular">
          <p><strong>Como funciona a terapia online?</strong></p>
          <p>O psicólogo online é uma prática de psicoterapia por meio de ferramentas atuais, neste caso
            internet. Utilizamos a ferramenta Zoom, Skype ou outro recurso tecnológico para realizar as
            sessões.</p>
        </div>
        <div className="sobreTerapia letraCelular">
          <p><strong>Tempo</strong></p>
          <p>Cada atendimento dura 50 minutos.</p>
          <p><strong>Quem pode receber atendimento?</strong></p>
          <p>Pessoas entre 18 e 60 anos.</p>
        </div>


        <div className="sobreTerapia letraCelular">
          <p><strong>Sigilo garantido</strong></p>
          <p>Todas as informações transmitidas são mantidas em sigilo. Os serviços realizados estão
            submetidos ao código de ética profissional do psicólogo.</p>

        </div>

        <div className="sobreTerapia letraMenor letraCelular">
          <p><strong>Agende sua consulta online!</strong></p>
          <p>1 - Entre em contato por WhatsApp <strong><a href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank">(11) 99010-5998</a></strong> e agende sua consulta.</p>
        <p>2- Realize o pagamento e envie o comprovante.</p>
        <p>3- Instale a ferramenta de videoconferencia. Lembre-se que é necessário autorizar a camera e o microfone
            do seu dispositivo.</p>
        <p>4- Agora é necessário apenas aguardar a chamada!</p>
        </div>
      </div>
    </section>
    <Footer />
  </>
)

export default IndexPage