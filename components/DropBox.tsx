import { useSpring, animated } from "@react-spring/web";
import { DROPBOX_SIZE } from "../constants";
import { content } from "../content";

interface Props {
  isDropped: boolean;
  lastHovered: number;
  hovering: boolean;
  dragIndex: number;
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
}

export const DropBox = ({
  lastHovered,
  hovering,
  dragIndex,
  children,
  ref,
}: Props) => {
  const dropBoxProps = useSpring({
    width: hovering ? "100%" : "0",
    config: { bounce: 0 },
  });

  const opacityProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  });

  return (
    <animated.div
      ref={ref}
      style={{
        width: DROPBOX_SIZE + "px",
        height: DROPBOX_SIZE + "px",
        border: "3px solid",
        borderColor: "var(--chakra-colors-off-white)",
        borderRadius: "12px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        ...opacityProps,
      }}
    >
      <animated.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "7px",
          zIndex: "-1",

          background: hovering
            ? content[dragIndex].color
            : content[lastHovered].color,
          height: "100%",
          ...dropBoxProps,
        }}
      />

      {children}
    </animated.div>
  );
};
