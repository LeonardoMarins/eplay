import ProductList from '../../ProductList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGameAcao] = useState<Game[]>([])
  const [gamesEsportes, setGameEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGameLuta] = useState<Game[]>([])
  const [gamesRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))
  }, [])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))
  }, [])
  return (
    <>
      <ProductList games={gamesRpg} title="RPG" background="black" />
      <ProductList games={gamesAcao} title="Ação" background="gray" />
      <ProductList games={gamesEsportes} title="Esportes" background="black" />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}
export default Categories
