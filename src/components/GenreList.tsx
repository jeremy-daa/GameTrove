import { List, Image, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div>
      {error && <Text>{error}</Text>}

      {isLoading
        ? skeleton.map((s) => <GenreListSkeleton key={s} />)
        : genres.map((genre) => (
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
