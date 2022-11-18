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
    display: isDropped ? "block" : "none",
  });

  const dropBoxX = Number(dropBoxRef.current?.offsetLeft || 0);
  const dropBoxY = Number(dropBoxRef.current?.offsetTop || 0);

  const projectContent = content[lastHovered];

  return (
    <>
      <Flex
        overflow="hidden"
        justify="center"
        align="center"
        position="absolute"
        flexDir="column"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display={isDropped ? "flex" : "none"}
      >
        <animated.div
          style={{
            width: "1px",
            height: "1px",
            position: "absolute",
            left: dropBoxX + 20,
            top: dropBoxY + 20,
            zIndex: 50,
            backgroundColor: projectContent.color,
            borderRadius: "100%",
            overflow: "hidden",
            ...newPageProps,
          }}
        ></animated.div>
      </Flex>
      <Flex
        overflow="hidden"
        justify="center"
        align="center"
        position="absolute"
        flexDir="column"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display={isDropped ? "flex" : "none"}
      >
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

            <Text
              fontWeight="bold"
              mb={3}
              fontSize="xl"
              color={projectContent.color}
            >
              {projectContent.subTitle}
            </Text>

            <Flex>
              <Box w="50%" mr={4}>
                <Text align="left">{projectContent.desc}</Text>

                <Flex flexWrap="wrap" mt={2} hidden={!projectContent.links}>
                  {projectContent.links?.map(({ name, url }) => (
                    <Link
                      mr="5"
                      mt={2}
                      key={name}
                      isExternal
                      fontWeight="bold"
                      href={url}
                    >
                      {name}
                    </Link>
                  ))}
                </Flex>
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
                <a
                  href={projectContent.imgUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={projectContent.imgUrl} layout="fill" />
                </a>
              </Box>
            </Flex>

            <Flex mt={3} wrap={"wrap"}>
              {projectContent.tags.map((tag) => {
                return <TechTag key={tag.name} name={tag.name} src={tag.src} />;
              })}
            </Flex>
          </Flex>
        </animated.div>
      </Flex>
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
