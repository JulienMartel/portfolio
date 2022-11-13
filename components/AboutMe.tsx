import {
  Avatar,
  Flex,
  HStack,
  Text,
  Link,
  Icon,
  Box,
  Stack,
  Badge,
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  MdEmail,
  MdLocationPin,
  MdAccessTimeFilled,
  MdLanguage,
} from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";
import { IconType } from "react-icons/lib";
import moment from "moment-timezone";
import { useMemo } from "react";

export const AboutMe = () => {
  const props = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    delay: 100,
  });

  const time = moment(Date.now()).tz("America/Winnipeg").format("h:mma (z)");

  const socials: { name: string; icon: IconType; href: string }[] = [
    {
      name: "github",
      href: "https://github.com/JulienMartel",
      icon: FaGithub,
    },
    {
      name: "twitter",
      href: "https://twitter.com/cc4888",
      icon: FaTwitter,
    },
    {
      name: "email",
      href: "#",
      icon: MdEmail,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/julienbmartel/",
      icon: FaLinkedin,
    },
  ];

  const skills = [
    "typescript",
    "next.js",
    "microservices",
    "web3",
    "design",
    "automation",
  ];

  return (
    <animated.div style={props}>
      <Flex color="off.white" pt="20" flexDir="column">
        <HStack spacing="7">
          <Avatar src="/avi.png" size="2xl" />

          <Stack spacing={3}>
            <Text textAlign="left">
              Julien <Text as={"i"}>— online name: ju/jubag —</Text> is a
              fullstack web engineer. Keep talking in third person. Vivamus
              ornare ante id dui volutpat laoreet. Quisque aliquet fermentum
              eros, a hendrerit erat facilisis ut. Donec arcu mi, fermentum eu
              augue ut, lacinia dapibus enim.
            </Text>

            <HStack>
              {skills.map((skill) => (
                <Badge key={skill} bg="off.white" color="off.black">
                  {skill}
                </Badge>
              ))}
            </HStack>
          </Stack>
        </HStack>

        <HStack my={7} spacing={5}>
          {socials.map((social) => (
            <MyLink key={social.name} {...social} />
          ))}
        </HStack>

        <Divider opacity={0.15} />

        <StatGroup mt={7} textAlign="left">
          <Stat>
            <StatLabel>
              location{" "}
              <Icon
                mb={-0.5}
                color="#fad121"
                as={MdLocationPin}
                opacity={0.8}
              />
            </StatLabel>
            <StatNumber fontSize={"lg"}>Winnipeg, CA</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>
              time{" "}
              <Icon
                color="#fad121"
                mb={-0.5}
                as={MdAccessTimeFilled}
                opacity={0.8}
              />
            </StatLabel>
            <StatNumber fontSize={"lg"}>{time}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>
              languages{" "}
              <Icon color="#fad121" opacity={0.8} mb={-0.5} as={MdLanguage} />
            </StatLabel>
            <StatNumber fontSize={"lg"}>English, French</StatNumber>
          </Stat>
        </StatGroup>

        {/* ju#8888 */}

        {/* <Flex
          w="full"
          minH="40"
          p={4}
          border="solid 3px"
          borderColor="off.white"
          rounded="lg"
          justify="center"
          align="center"
        >
          {wpgTime + " " + timezone}, Winnipeg, CA, languages: English, French,
          timezone, languages, etc
        </Flex> */}
      </Flex>
    </animated.div>
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
