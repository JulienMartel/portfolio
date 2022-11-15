import { IconType } from "react-icons/lib";
import { HStack, Link, Icon, StackProps } from "@chakra-ui/react";
import { socials } from "../content";

export const Links = (props: StackProps) => {
  return (
    <HStack spacing={5} {...props}>
      {socials.map((social) => (
        <MyLink key={social.name} {...social} />
      ))}
    </HStack>
  );
};

const MyLink = ({
  name,
  href,
  icon,
}: {
  name: string;
  href: string;
  icon: IconType;
}) => {
  return (
    <Link href={href} isExternal rel="noopener noreferrer">
      <Icon mb={-0.5} as={icon} /> {name}
    </Link>
  );
};
