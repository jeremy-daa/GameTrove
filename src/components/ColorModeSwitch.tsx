import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode.charAt(0).toUpperCase() + colorMode.slice(1)}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
