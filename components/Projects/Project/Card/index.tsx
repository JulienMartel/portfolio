import {
  Flex,
  Text,
  Box,
  CloseButton,
  Link,
  Tag,
  TagLabel,
  Avatar,
  useBreakpointValue as bp,
} from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  close: () => void;
  title: string;
  subTitle: string;
  desc: string;
  color: string;
  imgUrl: string;
  tags: { name: string; src?: string }[];
  links?: { name: string; url?: string }[];
}

export const Card = ({ close, ...content }: Props) => {
  return (
    <Flex
      mx={4}
      maxW="container.md"
      w="calc(100% - 32px)"
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
          {content.title}
        </Text>

        <CloseButton onClick={close} size="lg" />
      </Flex>

      <Text
        fontWeight="bold"
        mb={3}
        fontSize="xl"
        color={content.color}
        opacity={0.8}
      >
        {content.subTitle}
      </Text>

      <Flex flexDir={bp(["column-reverse", , , "row"])}>
        <Box w={bp(["full", , , "50%"])} mr={4}>
          <Text align="left" mt={bp([3, , , 0])}>
            {content.desc}
          </Text>

          <Flex flexWrap="wrap" mt={2} hidden={!content.links}>
            {content.links?.map(({ name, url }) => (
              <Link
                mr="5"
                mt={2}
                key={name}
                isExternal
                fontWeight="bold"
                href={url}
                color={content.color}
                opacity={0.8}
              >
                {name}
              </Link>
            ))}
          </Flex>
        </Box>
        <a
          href={content.imgUrl}
          target="_blank"
          rel="noreferrer"
          style={{ width: bp(["100%", , , "50%"]) }}
        >
          <Box
            w="full"
            h="full"
            bg="black"
            color="white"
            sx={{ aspectRatio: "16/9" }}
            pos="relative"
            overflow={"hidden"}
            rounded="lg"
          >
            <Image src={content.imgUrl} layout="fill" />
          </Box>
        </a>
      </Flex>

      <Flex mt={3} wrap={"wrap"}>
        {content.tags.map((tag) => {
          return <TechTag key={tag.name} {...tag} />;
        })}
      </Flex>
    </Flex>
  );
};

const TechTag = ({ name, src }: { name: string; src?: string }) => {
  return (
    <Tag mr="2" mt="2" size="lg" bg="off.white" borderRadius="full">
      {src && <Avatar src={src} size="xs" name={name} ml={-1} mr={2} />}
      <TagLabel color="off.black">{name}</TagLabel>
    </Tag>
  );
};
