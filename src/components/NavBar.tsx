import { HStack, Image, Text } from "@chakra-ui/react";
import icon from "../assets/User Game.ico";

const NavBar = () => {
  return (
    <HStack>
      <Image src={icon} boxSize="60px" />
      <Text>A Navigation Bar</Text>
    </HStack>
  );
};

export default NavBar;
