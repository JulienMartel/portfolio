import { useDrag } from "@use-gesture/react";
import { useSprings, config } from "@react-spring/web";
import { useEffect, useState } from "react";
import { BALLS, DROPBOX_SIZE } from "../../../constants";

interface Props {
  dropBoxRef: React.RefObject<HTMLDivElement>;
  resume: boolean;
  setDragIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsDropped: React.Dispatch<React.SetStateAction<boolean>>;
  setHovering: React.Dispatch<React.SetStateAction<boolean>>;
  setLastHovered: React.Dispatch<React.SetStateAction<number>>;
}

export const useBalls = ({
  dropBoxRef,
  resume,
  setDragIndex,
  setIsDropped,
  setHovering,
  setLastHovered,
}: Props) => {
  const [props, api] = useSprings(
    BALLS.length,
    (i) => ({
      from: { x: BALLS[i][0] * 8, y: BALLS[i][1] * 8, scale: 1 },
      to: { x: BALLS[i][0], y: BALLS[i][1], scale: 1 },
      delay: 200 + i * 60,
      config: config.gentle,
    }),
    [dropBoxRef]
  );

  useEffect(() => {
    if (api) {
      api.resume();
    }
  }, [resume, api]);

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
          onPause: () => {
            setIsDropped(true);
          },
        };
      });

      if (
        //theyre hovering over drop zone
        Math.abs(x - dropBoxX) < DROPBOX_SIZE &&
        x - dropBoxX > 0 &&
        Math.abs(dropBoxY - y) < DROPBOX_SIZE &&
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

  return { props, bind, isDragging };
};
