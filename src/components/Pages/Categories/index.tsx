import ProductList from '../../ProductList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'
import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery
} from '../../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: fightGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: sportGames } = useGetSportGameQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList games={rpgGames} title="RPG" background="black" id="rpg" />
        <ProductList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Categories
