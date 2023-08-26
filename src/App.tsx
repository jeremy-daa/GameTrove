import { GridItem, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  console.log(selectedPlatform);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem padding={"20px"} width={"200px"} area="aside">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </div>

        <GameGrid
          selectedPlatforms={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
