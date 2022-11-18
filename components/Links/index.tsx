import { IconType } from "react-icons/lib";
import { HStack, Link as ChakraLink, Icon, StackProps } from "@chakra-ui/react";
import { socials } from "../../content";

export const Links = (props: StackProps) => {
  return (
    <HStack spacing={5} {...props}>
      {socials.map((social) => (
        <Link key={social.name} {...social} />
      ))}
    </HStack>
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
