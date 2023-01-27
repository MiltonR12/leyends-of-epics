import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addEquipo } from '../hooks/stateApi'
import estilos from '../sass/formulario.module.scss'

function Formulario() {

  const navigate = useNavigate()
  const addEquipoMutation = addEquipo()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const info = Object.fromEntries(form)
    addEquipoMutation.mutate({
      ...info,
      date: 'Sin designar'
    })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className={estilos.cuerpo} >
      <div className={estilos.contForm} >

        <div className={estilos.seccion} >
          <label htmlFor="">Nombre del Equipo</label>
          <input type="text" name="name" id="" required />
        </div>

        <div className={estilos.seccion} >
          <label htmlFor="">Numero de celular del capitan</label>
          <input type="text" name="captain" id="" required />
        </div>

        <div className={estilos.seccion} >
          <label htmlFor="">Integrantes</label>
          <textarea name="team" id="" rows="5" required ></textarea>
        </div>

        <div className={estilos.seccion} >
          <label htmlFor="">ID y NICK de cada jugador</label>
          <textarea name="members" id="" rows="5" required ></textarea>
        </div>

        <div className={estilos.seccion} >
          <button className={estilos.btnEnviar} >ENVIAR</button>
        </div>

      </div>
    </form>
  )
}

export default Formulario