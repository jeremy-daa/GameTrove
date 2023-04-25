import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const colors = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={colors} fontSize={"14px"} paddingX={"2"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
