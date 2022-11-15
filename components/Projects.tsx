import { Flex, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { DropBox } from "../components/DropBox";
import { Balls } from "../components/Balls";
import { ProjectPage } from "../components/ProjectPage";
import { BALL_SIZE, RADIUS } from "../constants";

export const Projects = () => {
  const dropBoxRef = useRef<HTMLDivElement>(null);

  const [isDropped, setIsDropped] = useState(false);

  const [dragIndex, setDragIndex] = useState(0);

  const [hovering, setHovering] = useState(false);
  const [lastHovered, setLastHovered] = useState(0);

  const [resume, setResume] = useState(false);
  const close = () => {
    setIsDropped(false);
    setResume(!resume);
    setHovering(false);
  };

  return (
<<<<<<< HEAD
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
    >
      <Text mt={-64} color="off.white" opacity={0}>
        test
      </Text>

      <Flex mt={64} justify="center" align="center">
        <DropBox
          ref={dropBoxRef}
          isDropped={isDropped}
          lastHovered={lastHovered}
          hovering={hovering}
          dragIndex={dragIndex}
        />

=======
    <Flex justify="center" align="center" boxSize={RADIUS * 2 + BALL_SIZE}>
      <DropBox
        ref={dropBoxRef}
        isDropped={isDropped}
        lastHovered={lastHovered}
        hovering={hovering}
        dragIndex={dragIndex}
      >
>>>>>>> single-page
        <Balls
          dropBoxRef={dropBoxRef}
          setDragIndex={setDragIndex}
          setIsDropped={setIsDropped}
          setHovering={setHovering}
          setLastHovered={setLastHovered}
          resume={resume}
          hovering={hovering}
          isDropped={isDropped}
        />
      </DropBox>

      <ProjectPage
        isDropped={isDropped}
        close={close}
        lastHovered={lastHovered}
        dropBoxRef={dropBoxRef}
      />
    </Flex>
  );
};
