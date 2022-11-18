import { animated, useSprings, config } from "@react-spring/web";
import { Icon } from "@chakra-ui/react";
import { ARROWS, DEGREE_PER_BALL } from "../../../constants";
import { FaLongArrowAltDown } from "react-icons/fa";

export const Arrows = ({
  isDragging,
  isDropped,
}: {
  isDragging: boolean;
  isDropped: boolean;
}) => {
  const [props] = useSprings(
    ARROWS.length,
    (i) => ({
      from: { x: ARROWS[i][0] * 1.4, y: ARROWS[i][1] * 1.4, opacity: 0 },
      to: {
        x: ARROWS[i][0],
        y: ARROWS[i][1],
        opacity: isDragging || isDropped ? 0 : 0.1,
        immediate: true,
      },
      delay: isDragging || isDropped ? 0 : 1300,
      config: config.slow,
    }),
    [isDragging, isDropped]
  );

  return (
    <>
      {props.map(({ x, y, opacity }, i) => (
        <animated.div
          key={i}
          style={{
            position: "absolute",
            opacity,
            rotate: 180 - i * DEGREE_PER_BALL,
            x,
            y,
          }}
        >
          <Icon fontSize="xl" as={FaLongArrowAltDown} color="off.white" />
        </animated.div>
      ))}
    </>
  );
};
