import { HStack, Image } from "@chakra-ui/react";
import icon from "../assets/User Game.ico";

const NavBar = () => {
  return (
    <HStack>
      <Image src={icon} boxSize="60px" />
    </HStack>
  );
};

export default NavBar;
