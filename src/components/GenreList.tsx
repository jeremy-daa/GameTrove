import { List, Image, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <div>
      {error && <Text>{error}</Text>}
      {isLoading && <Text>Loading Genres</Text>}
      {!isLoading &&
        !error &&
        genres.map((genre) => (
          <List key={genre.id} paddingY={"2"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"5px"}
                src={getCroppedUrl(genre.image_background)}
              ></Image>
              <Text fontSize={18} paddingLeft={2}>
                {genre.name}
              </Text>
            </HStack>
          </List>
        ))}
    </div>
  );
};

export default GenreList;
