import type { NextPage } from "next";
import { Container, Flex } from "@chakra-ui/react";
import { Header } from "./../components/Header";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" overflow="hidden" bg="off.black">
      <Container
        maxW="container.md"
        w="full"
        flexDir="column"
        display="flex"
        p={4}
        h="full"
      >
        <Header />
      </Container>
    </Flex>
  );
};

export default Home;
