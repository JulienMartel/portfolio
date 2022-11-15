import { Box, List, ListItem, ListIcon, BoxProps } from "@chakra-ui/react";
import { facts } from "../content";

export const Facts = (props: BoxProps) => {
  return (
    <Box h="min" bg="#3D3D3D" rounded="lg" p="4" {...props}>
      <List spacing={4}>
        {facts.map(({ val, icon }) => (
          <ListItem>
            <ListIcon as={icon} mb={0.5} color="#fad121" />
            {val}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
