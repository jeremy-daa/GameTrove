import { FeatureBundle } from "framer-motion";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
interface Game {
  id: number;
  name: string;
}
interface GameFetchResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<GameFetchResponse>("/game")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
