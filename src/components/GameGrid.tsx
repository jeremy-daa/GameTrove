import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, games, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div style={{ padding: "25px" }}>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading
          ? skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton key={s} />
              </GameCardContainer>
            ))
          : games.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
