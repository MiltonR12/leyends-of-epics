import React from 'react'
import Formulario from '../components/Formulario'
import estilos from '../sass/formPage.module.scss'

function FormPage() {
  return (
    <main className={estilos.contFormPage} >
      <h2>FORMULARIO DE INSCRIPCION</h2>
      <Formulario />
    </main>
  )
}

export default FormPage