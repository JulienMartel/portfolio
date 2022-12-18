import { Flex } from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import { content } from "./../../../content";
import { Card } from "./Card";

interface Props {
  isDropped: boolean;
  close: () => void;
  lastHovered: number;
  dropBoxRef: React.RefObject<HTMLDivElement>;
}

export const Project: React.FC<Props> = ({
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
            ...projectPageProps,
          }}
        >
          <Card {...projectContent} close={close} />
        </animated.div>
      </Flex>
    </>
  );
};
