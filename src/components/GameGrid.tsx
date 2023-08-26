import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatforms: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatforms }: Props) => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { games, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatforms
  );

  return (
    <div style={{ padding: "25px" }}>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 4 }} spacing={5}>
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
