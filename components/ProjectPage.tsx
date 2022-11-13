import {
  Flex,
  Text,
  Box,
  CloseButton,
  HStack,
  Link,
  Tag,
  TagLabel,
  Avatar,
} from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import { content } from "../content";

interface Props {
  isDropped: boolean;
  close: () => void;
  lastHovered: number;
  dropBoxRef: React.RefObject<HTMLDivElement>;
}

export const ProjectPage: React.FC<Props> = ({
  isDropped,
  close,
  lastHovered,
  dropBoxRef,
}: Props) => {
  const newPageProps = useSpring({
    scale: isDropped ? 3000 : 0,
    config: { bounce: 0 },
  });

  const projectPageProps = useSpring({
    opacity: isDropped ? 1 : 0,
    scale: isDropped ? 1 : 0,
    delay: isDropped ? 100 : 0,
  });

  const dropBoxX = Number(dropBoxRef.current?.offsetLeft || 0);
  const dropBoxY = Number(dropBoxRef.current?.offsetTop || 0);

  const projectContent = content[lastHovered];
  return (
    <>
      <animated.div
        style={{
          width: "1px",
          height: "1px",
          position: "absolute",
          left: dropBoxX + 40,
          top: dropBoxY + 40,
          zIndex: 50,
          backgroundColor: content[lastHovered].color,
          borderRadius: "100%",
          ...newPageProps,
        }}
      ></animated.div>

      <animated.div
        style={{
          zIndex: 55,
          position: "absolute",
          width: "100%",

          ...projectPageProps,
        }}
      >
        <Flex
          mx="auto"
          maxW="container.md"
          w="full"
          flexDir={"column"}
          rounded="xl"
          color="off.white"
          bg="off.black"
          p={5}
          px={6}
          shadow="2xl"
        >
          <Flex justify={"space-between"}>
            <Text fontWeight="black" fontSize="3xl">
              {projectContent.title}
            </Text>

            <CloseButton onClick={close} size="lg" />
          </Flex>

          <HStack my={3} spacing={5}>
            <Link href="#">website</Link>
            <Link href="#">github</Link>
            <Link href="#">Link 3</Link>
          </HStack>

          <Flex>
            <Box w="50%" mr={4}>
              <Text align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box
              w="50%"
              h="full"
              bg="black"
              color="white"
              sx={{ aspectRatio: "16/9" }}
              pos="relative"
              overflow={"hidden"}
              rounded="lg"
            >
              <a href="/archillect-tab.png" target="_blank">
                <Image src={projectContent.imgUrl} layout="fill" />
              </a>
            </Box>
          </Flex>

          <Flex wrap={"wrap"} mt={3}>
            {projectContent.tags.map((tag) => {
              return <TechTag key={tag.name} name={tag.name} src={tag.src} />;
            })}
          </Flex>
        </Flex>
      </animated.div>
    </>
  );
};

const TechTag = ({ name, src }: { name: string; src: string | undefined }) => {
  return (
    <Tag mr="2" mt="2" size="lg" bg="off.white" borderRadius="full">
      {src && <Avatar src={src} size="xs" name={name} ml={-1} mr={2} />}
      <TagLabel color="off.black">{name}</TagLabel>
    </Tag>
  );
};
