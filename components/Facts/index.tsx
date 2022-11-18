import { Box, List, ListItem, ListIcon, BoxProps } from "@chakra-ui/react";
import { facts } from "../../content";

export const Facts = (props: BoxProps) => (
  <Box h="min" bg="#3C3C3C" rounded="lg" p="4" {...props}>
    <List spacing={4}>
      {facts.map(({ val, icon }) => (
        <ListItem key={val}>
          <ListIcon as={icon} mb={0.5} color="#fad121" />
          {val}
        </ListItem>
      ))}
    </List>
  </Box>
);
