import { List, Image, Text, HStack, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const { genres, error, isLoading } = useGenres();
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
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant={"link"}
                  fontSize={18}
                  paddingLeft={2}
                >
                  {genre.name}
                </Button>
              </HStack>
            </List>
          ))}
    </div>
  );
};

export default GenreList;
