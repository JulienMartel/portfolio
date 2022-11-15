import type { NextPage } from "next";
import { Container, Flex, Divider } from "@chakra-ui/react";
import { Header } from "./../components/Header";
import { Bio } from "../components/Bio";
import { Links } from "../components/Links";
import { useSpring, animated } from "@react-spring/web";
import { Projects } from "./../components/Projects";
import { BALL_SIZE, RADIUS } from "../constants";
import { Facts } from "./../components/Facts";

const Home: NextPage = () => {
  // const props = useSpring({
  //   from: { opacity: 0, y: 30 },
  //   to: { opacity: 1, y: 0 },
  //   delay: 100,
  // });

  return (
    <Flex h="100vh" bg="off.black" overflow={"hidden"} color="off.white">
      <Container
        display="flex"
        flexDir="column"
        maxW="container.md"
        w="full"
        p={4}
      >
        <Header />

        <Bio pt={8} />

        <Links my={8} />

        <Flex justify="space-between">
          <Facts />

          <Projects />

          <Divider
            orientation="vertical"
            height={RADIUS * 2 + BALL_SIZE + 30}
            opacity={0.15}
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Home;
