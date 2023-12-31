import Hero from '../../Hero'
import Section from '../../Section'
import Gallery from '../../Gallery'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Game } from '../Home'
import { useGetGameQuery } from '../../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }
  return (
    <>
      <Hero game={game} />
      <Section title="sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma</b>:{game.details.system}
          <br />
          <b>Desenvolvedor</b>: {game.details.developer} <br />
          <b>Editora</b>: {game.details.publisher}
          <br />
          <b>EntertainmentIdiomas</b>: O jogo oferece suporte a diversos
          idiomas, incluindo {game.details.languages}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
