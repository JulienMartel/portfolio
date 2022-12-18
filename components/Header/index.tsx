import {
  Text,
  Box,
  useBreakpointValue as bp,
  Flex,
  Show,
} from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";

export const Header = () => {
  const styles = useSpring({
    delay: 280,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <animated.div style={styles}>
      <Flex
        w="full"
        justify="space-between"
        align="center"
        flexDir={bp(["row-reverse", , "row"])}
      >
        <Text fontWeight="black" fontSize={bp(["3xl", , "4xl"])}>
          jubag.dev
        </Text>

        <Show below="lg">
          <Box w="64px" h="64px" overflow="hidden" rounded="full">
            <Image height={64} width={64} src="/avi-64.png" alt="avi" />
          </Box>
        </Show>
      </Flex>
    </animated.div>
  );
};
