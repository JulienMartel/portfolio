import type { NextPage } from "next";
import {
  Container,
  Flex,
  Box,
  useBreakpointValue,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Header } from "./../components/Header";
import { Bio } from "../components/Bio";
import { Links } from "../components/Links";
import { useSpring, animated } from "@react-spring/web";
import { Projects } from "./../components/Projects";
import { Facts } from "./../components/Facts";
import { FaDesktop } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  // const props = useSpring({
  //   from: { opacity: 0, y: 30 },
  //   to: { opacity: 1, y: 0 },
  //   delay: 100,
  // });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const mobile = useBreakpointValue([true, , false]);

  return (
    <Flex h="100vh" bg="off.black" overflow={"hidden"} color="off.white">
      <Container
        display="flex"
        flexDir="column"
        maxW="container.md"
        w="full"
        p={4}
        hidden={mobile && !loading}
      >
        <Header />

        <Bio pt={8} />

        <Links my={8} />

        <Flex justify="space-between">
          <Facts />

          <Projects />

          <Box />
        </Flex>
      </Container>

      <Flex
        hidden={!mobile || loading}
        w="full"
        h="full"
        justify="center"
        align="center"
        flexDir="column"
        p={10}
      >
        <Icon mb="3" fontSize="4xl" as={FaDesktop} />
        <Text textAlign="center">
          Mobile site under constructuion, please visit with desktop :)
        </Text>
      </Flex>
    </Flex>
  );
};

export default Home;
