import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" margin="15px">
      <HStack>
        <Image src={logo} width="60px" />
        <Text fontFamily={"Trebuchet MS"} fontSize={"25px"} paddingX={3}>
          GameTrove
        </Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
