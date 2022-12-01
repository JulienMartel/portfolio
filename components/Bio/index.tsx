import { HStack, Text, Stack, Badge, StackProps, Box } from "@chakra-ui/react";
import { skills, bio } from "../../content";
import Image from "next/image";

export const Bio = (props: StackProps) => {
  return (
    <HStack spacing="6" {...props}>
      <Box minW={128} h={128} overflow="hidden" rounded="full">
        <Image height={128} width={128} src="/avi.png" alt="avi" />
      </Box>

      <Stack spacing={3}>
        <Text textAlign="left">{bio}</Text>

        <HStack>
          {skills.map((skill) => (
            <Badge key={skill} bg="off.white" color="off.black">
              {skill}
            </Badge>
          ))}
        </HStack>
      </Stack>
    </HStack>
  );
};
