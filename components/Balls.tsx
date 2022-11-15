import { useDrag } from "@use-gesture/react";
import { animated, useSprings, config } from "@react-spring/web";
import { BALLS, DEGREE_PER_BALL } from "../constants";
import { useEffect, useState } from "react";
import { Icon, Flex } from "@chakra-ui/react";
import { ARROWS, BALL_SIZE } from "../constants";
import { FaLongArrowAltDown } from "react-icons/fa";
import { content } from "../content";

interface Props {
  dropBoxRef: React.RefObject<HTMLDivElement>;
  setDragIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
  setLastHovered: React.Dispatch<React.SetStateAction<number>>;
  resume: boolean;
  hovering: boolean;
  isDropped: boolean;
}

export const Balls = ({
  dropBoxRef,
  setDragIndex,
  setIsDropped,
  setHovering,
  setLastHovered,
  resume,
  isDropped,
}: Props) => {
  const [props, api] = useSprings(
    BALLS.length,
    (i) => ({
      from: { x: BALLS[i][0] * 8, y: BALLS[i][1] * 8, scale: 1 },
      to: { x: BALLS[i][0], y: BALLS[i][1], scale: 1 },
      delay: i * 60,
      config: config.gentle,
    }),
    [dropBoxRef]
  );

  useEffect(() => {
    api.resume();
  }, [resume]);

  const [isDragging, setIsDragging] = useState(false);
  const bind = useDrag(
    (state) => {
      const {
        movement: [mx, my],
        down,
        args: [index],
        xy: [x, y],
        active,
      } = state;

      if (active) {
        setIsDragging(true);
        setDragIndex(index);
      } else {
        setIsDragging(false);
      }

      const dropBoxX = Number(dropBoxRef.current?.offsetLeft);
      const dropBoxY = Number(dropBoxRef.current?.offsetTop);

      api.start((i: number) => {
        if (index !== i) return;
        return {
          x: down ? BALLS[i][0] + mx : BALLS[i][0],
          y: down ? BALLS[i][1] + my : BALLS[i][1],
          scale: down ? 1.2 : 1,
          // immediate: down,
          onPause: () => {
            setIsDropped(true);
          },
        };
      });

      if (
        //theyre hovering over drop zone
        Math.abs(x - dropBoxX) < 40 &&
        x - dropBoxX > 0 &&
        Math.abs(dropBoxY - y) < 40 &&
        y - dropBoxY > 0
      ) {
        setHovering(true);
        setLastHovered(index);

        if (!active) {
          // dropped
          api.pause();
        }
      } else {
        setHovering(false);
      }
    },
    { pointer: { capture: true } }
  );

  return (
    <>
      {props.map(({ x, y, scale }, i) => (
        <animated.div
          key={i}
          style={{
            x,
            y,
            scale,
            height: BALL_SIZE + "px",
            width: BALL_SIZE + "px",
            borderRadius: "100%",
            position: "absolute",
            backgroundColor: content[i].color,
            cursor: "pointer",
            touchAction: "none",
            zIndex: 20,
          }}
          {...bind(i)}
        />
      ))}
      <Arrows isDropped={isDropped} isDragging={isDragging} />
    </>
  );
};

const Arrows = ({
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
