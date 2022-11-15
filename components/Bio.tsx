import {
  Avatar,
  HStack,
  Text,
  Stack,
  Badge,
  StackProps,
} from "@chakra-ui/react";
import { skills } from "../content";

export const Bio = (props: StackProps) => {
  return (
    <HStack spacing="6" {...props}>
      <Avatar src="/avi.png" size="2xl" />

      <Stack spacing={3}>
        <Text textAlign="left">
          Julien <Text as={"i"}>— online name: ju/jubag —</Text> is a fullstack
          web engineer with diverse experience. Keep talking in third person.
          Vivamus ornare ante id dui volutpat laoreet. Quisque aliquet fermentum
          eros, a hendrerit erat facilisis ut.
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
  );
};
