import ProductsList from '../../components/ProductsList';

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api';

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery();

  return (
    <>
      <ProductsList
        id="action"
        games={actionGames}
        title="Acão"
        background="black"
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        games={sportGames}
        title="Esportes"
        background="gray"
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="black"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
        isLoading={isLoadingFight}
      />
      <ProductsList
        id="rpg"
        games={rpgGames}
        title="RPG"
        background="black"
        isLoading={isLoadingRpg}
      />
    </>
  );
};

export default Categories;
