import {
  HStack,
  Text,
  Stack,
  Badge,
  StackProps,
  Box,
  useBreakpointValue as bp,
  Show,
  Flex,
} from "@chakra-ui/react";
import { skills, bio } from "../../content";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

export const Bio = (props: StackProps) => {
  const aviStyles = useSpring({
    delay: 360,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  const bioStyles = useSpring({
    delay: 440,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  const skillsStyles = useSpring({
    delay: 520,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <HStack spacing="6" {...props}>
      <Show above="lg">
        <animated.div style={aviStyles}>
          <Box minW={128} h={128} overflow="hidden" rounded="full">
            <Image height={128} width={128} src="/avi.png" alt="avi" />
          </Box>
        </animated.div>
      </Show>

      <Stack w="full" spacing={3}>
        <animated.div style={bioStyles}>
          <Text textAlign="left">{bio}</Text>
        </animated.div>

        <animated.div style={skillsStyles}>
          <Flex flexWrap="wrap">
            {skills.map((skill) => (
              <Badge key={skill} mr="2" mb="2" bg="off.white" color="off.black">
                {skill}
              </Badge>
            ))}
          </Flex>
        </animated.div>
      </Stack>
    </HStack>
  );
};
