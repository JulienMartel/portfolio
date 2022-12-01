import { Box, List, ListItem, ListIcon, BoxProps } from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import { IconType } from "react-icons/lib";
import moment from "moment-timezone";
import {
  MdLocationPin,
  MdAccessTimeFilled,
  MdLanguage,
  MdSchool,
} from "react-icons/md";

const Time = () => {
  const time = moment(Date.now()).tz("America/Winnipeg").format("h:mma (z)");
  return <>{time}</>;
};

const facts: { icon: IconType; val: string | JSX.Element }[] = [
  { val: "English, French", icon: MdLanguage },
  { val: "Winnipeg, CA", icon: MdLocationPin },
  {
    val: <Time />,
    icon: MdAccessTimeFilled,
  },
  { val: "MITT College", icon: MdSchool },
];

export const Facts = (props: BoxProps) => {
  const styles = useSpring({
    delay: 400,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <animated.div style={styles}>
      <Box h="min" bg="#3C3C3C" rounded="lg" p="4" {...props}>
        <List spacing={4}>
          {facts.map(({ val, icon }, i) => (
            <ListItem key={i}>
              <ListIcon as={icon} mb={0.5} color="#fad121" />
              {val}
            </ListItem>
          ))}
        </List>
      </Box>
    </animated.div>
  );
};
