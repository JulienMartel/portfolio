import { animated } from "@react-spring/web";
import { BALL_SIZE } from "../../../constants";
import { content } from "../../../content";
import { useBalls } from "./useBalls";
import { Arrows } from "./Arrows";

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
  const { props, bind, isDragging } = useBalls({
    dropBoxRef,
    resume,
    setDragIndex,
    setIsDropped,
    setHovering,
    setLastHovered,
  });

  return (
    <>
      {props.map(({ x, y, scale, opacity }, i) => (
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
            opacity,
          }}
          {...bind(i)}
        />
      ))}
      <Arrows isDropped={isDropped} isDragging={isDragging} />
    </>
  );
};
