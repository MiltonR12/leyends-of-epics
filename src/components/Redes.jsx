import React from 'react'
import { BsFacebook, BsWhatsapp, BsDiscord } from "react-icons/bs";
import estilos from '../sass/redes.module.scss'

function Redes() {
  return (
    <section className={estilos.cuerpo} >
      <div className={estilos.contTitle} >
        <h1>REDES:</h1>
      </div>
      <div className={estilos.contRedes} >
        <a href="https://www.facebook.com/DimeLegendsBolivia">
          <BsFacebook />
        </a>
        <a href="https://chat.whatsapp.com/K5AH26VUJwC9zhLMnZ7OI1">
          <BsWhatsapp />
        </a>
        <a href="https://discord.gg/ajA2aKwH">
          <BsDiscord />
        </a>
      </div>
    </section>
  )
}

export default Redes