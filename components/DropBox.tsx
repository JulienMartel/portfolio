import { Flex, Stack, Text, Box, useConst } from "@chakra-ui/react";
import { useSpring, animated, useSprings, config } from "@react-spring/web";
import { forwardRef } from "react";
import { content } from "../content";

interface Props {
  isDropped: boolean;
  lastHovered: number;
  hovering: boolean;
  dragIndex: number;
}

export const DropBox = forwardRef<HTMLDivElement, Props>(
  ({ lastHovered, hovering, dragIndex }, ref) => {
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
          width: "80px",
          height: "80px",
          border: "4px solid",
          borderColor: "var(--chakra-colors-off-white)",
          borderRadius: "12px",
          position: "relative",
          ...opacityProps,
        }}
      >
        <animated.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: 7,
            background: hovering
              ? content[dragIndex].color
              : content[lastHovered].color,
            height: "100%",
            ...dropBoxProps,
          }}
        />
      </animated.div>
    );
  }
);
