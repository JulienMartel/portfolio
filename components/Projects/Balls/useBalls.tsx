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

const getCoords = (elem: HTMLDivElement | null) => {
  if (!elem) return { dropBoxY: 0, dropBoxX: 0 };
  var { top, left } = elem.getBoundingClientRect();

  return { dropBoxY: Math.round(top), dropBoxX: Math.round(left) };
};

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
      from: { x: BALLS[i][0] * 8, y: BALLS[i][1] * 8, scale: 1, opacity: 0 },
      to: { x: BALLS[i][0], y: BALLS[i][1], scale: 1, opacity: 1 },
      delay: 800 + i * 60,
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

      const { dropBoxX, dropBoxY } = getCoords(dropBoxRef.current);

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
