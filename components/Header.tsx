import {
  Container,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Text,
  Box,
} from "@chakra-ui/react";
import { Projects } from "../components/Projects";
import { AboutMe } from "../components/AboutMe";

export const Header = () => {
  return (
    <Tabs
      w="full"
      align="end"
      isLazy
      size="lg"
      variant="soft-rounded"
      colorScheme="gray"
    >
      <TabList pos="relative" zIndex="20">
        <Box my="auto" mr="auto">
          <Text fontWeight="black" fontSize="4xl" color={"off.white"}>
            Julien B. Martel
          </Text>
        </Box>
        <Tab
          color="#b8b8b8"
          _selected={{ backgroundColor: "#b8b8b8", color: "#292929" }}
          mr={1}
          h="min"
          my="auto"
          py="2"
        >
          about
        </Tab>
        <Tab
          color="#b8b8b8"
          _selected={{ backgroundColor: "#b8b8b8", color: "#292929" }}
          h="min"
          my="auto"
          py="2"
        >
          projects
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel p="0">
          <AboutMe />
        </TabPanel>
        <TabPanel>
          <Projects />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
