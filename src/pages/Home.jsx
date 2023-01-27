import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lista from '../components/Lista'
import estilos from '../sass/home.module.scss'

function Home() {

  const navigate = useNavigate()

  return (
    <main className={estilos.cuerpo} >
      <div className={estilos.contPresentacion} >
        <h1>Leyend Of Epics</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorem nisi. Dicta culpa accusamus architecto, consectetur distinctio impedit odio dignissimos.</p>
        <button
          className={estilos.btnEnviar}
          onClick={() => navigate('/form')}
        >INSCRIBIRSE</button>
      </div>
      <Lista />
    </main>
  )
}

export default Home