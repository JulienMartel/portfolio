import { HStack, Text, Stack, Badge, StackProps, Box } from "@chakra-ui/react";
import { skills, bio } from "../../content";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";

export const Bio = (props: StackProps) => {
  const aviStyles = useSpring({
    delay: 160,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  const bioStyles = useSpring({
    delay: 240,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  const skillsStyles = useSpring({
    delay: 320,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <HStack spacing="6" {...props}>
      <animated.div style={aviStyles}>
        <Box minW={128} h={128} overflow="hidden" rounded="full">
          <Image height={128} width={128} src="/avi.png" alt="avi" />
        </Box>
      </animated.div>

      <Stack spacing={3}>
        <animated.div style={bioStyles}>
          <Text textAlign="left">{bio}</Text>
        </animated.div>

        <animated.div style={skillsStyles}>
          <HStack>
            {skills.map((skill) => (
              <Badge key={skill} bg="off.white" color="off.black">
                {skill}
              </Badge>
            ))}
          </HStack>
        </animated.div>
      </Stack>
    </HStack>
  );
};
