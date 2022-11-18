import {
  Avatar,
  HStack,
  Text,
  Stack,
  Badge,
  StackProps,
} from "@chakra-ui/react";
import { skills, bio } from "../../content";

export const Bio = (props: StackProps) => {
  return (
    <HStack spacing="6" {...props}>
      <Avatar src="/avi.png" size="2xl" />

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
