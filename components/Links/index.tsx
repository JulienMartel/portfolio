import { IconType } from "react-icons/lib";
import { Stack, Link as ChakraLink, Icon, StackProps } from "@chakra-ui/react";
import { socials } from "../../content";
import { useSpring, animated } from "@react-spring/web";

export const Links = (props: StackProps) => {
  const styles = useSpring({
    delay: 550,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <animated.div style={styles}>
      <Stack spacing={4} {...props}>
        {socials.map((social) => (
          <Link key={social.name} {...social} />
        ))}
      </Stack>
    </animated.div>
  );
};

const Link = ({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: IconType;
}) => {
  return (
    <ChakraLink href={href} isExternal rel="noopener noreferrer">
      <Icon mb={-0.5} as={icon} /> {name}
    </ChakraLink>
  );
};
