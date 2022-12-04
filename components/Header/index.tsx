import { Text, Box } from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";

export const Header = () => {
  const styles = useSpring({
    delay: 280,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <animated.div style={styles}>
      <Box>
        <Text fontWeight="black" fontSize="4xl">
          jubag.dev
        </Text>
      </Box>
    </animated.div>
  );
};
