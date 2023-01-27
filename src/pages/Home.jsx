import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lista from '../components/Lista'
import Redes from '../components/Redes'
import Reglas from '../components/Reglas'
import estilos from '../sass/home.module.scss'

function Home() {

  const navigate = useNavigate()

  return (
    <main className={estilos.cuerpo} >
      <div className={estilos.contPresentacion} >
        <h1>Leyend Of Epics</h1>
        <p>Dime Legends se complace en invitarte a este nuevo torneo para que demuestren sus habilidad y asi fomentar el competitivo en Bolivia.</p>
        <button
          className={estilos.btnEnviar}
          onClick={() => navigate('/form')}
        >INSCRIBIRSE</button>
      </div>
      <Redes />
      <Reglas />
      <Lista />
    </main>
  )
}

export default Home