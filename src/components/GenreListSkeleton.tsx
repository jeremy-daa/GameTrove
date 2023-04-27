import { Box, HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Box padding={"10px"} boxShadow="lg">
      <HStack justifyContent={"space-between"}>
        <Skeleton flex={"0.3"} height={"35px"} width={"35px"} />
        <Stack flex={"0.7"}>
          <Skeleton height={"7px"} width={"100%"} paddingBottom={"2px"} />
          <Skeleton height={"7px"} width={"100%"} paddingBottom={"2px"} />
        </Stack>
      </HStack>
    </Box>
  );
};

export default GameCardSkeleton;
