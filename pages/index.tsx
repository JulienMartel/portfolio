import type { NextPage } from "next";
import {
  Container,
  Flex,
  Box,
  Show,
  useBreakpointValue as bp,
} from "@chakra-ui/react";
import { Header } from "./../components/Header";
import { Bio } from "../components/Bio";
import { Links } from "../components/Links";
import { Projects } from "./../components/Projects";
import { Facts } from "./../components/Facts";

const Home: NextPage = () => {
  return (
    <Flex minH="100vh" overflow={"hidden"} color="off.white">
      <Container
        display="flex"
        flexDir="column"
        maxW="container.md"
        w="full"
        p={4}
      >
        <Header />

        <Bio pt={8} />

        <Show above="lg">
          <Links direction="row" my={8} />
        </Show>

        <Flex my={bp([8, , , 0])} justify={bp(["center", , , "space-between"])}>
          <Show above="lg">
            <Facts />
          </Show>

          <Projects />

          <Show above="lg">
            <Box />
          </Show>
        </Flex>

        <Show below="lg">
          <Facts mt="2" />
        </Show>
      </Container>
    </Flex>
  );
};

export default Home;
