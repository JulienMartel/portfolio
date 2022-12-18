import {
  Box,
  List,
  ListItem,
  ListIcon,
  BoxProps,
  Flex,
  Show,
} from "@chakra-ui/react";
import { useSpring, animated } from "@react-spring/web";
import { IconType } from "react-icons/lib";
import moment from "moment-timezone";
import {
  MdLocationPin,
  MdAccessTimeFilled,
  MdLanguage,
  MdSchool,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { Links } from "../Links";

const Time = () => {
  const getTime = () =>
    moment(Date.now()).tz("America/Winnipeg").format("h:mma (z)");

  const [time, setTime] = useState<string>(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    delay: 600,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
  });

  return (
    <animated.div style={styles}>
      <Flex h="min" bg="#3C3C3C" rounded="lg" p="4" {...props}>
        <List minW="50%" spacing={4}>
          {facts.map(({ val, icon }, i) => (
            <ListItem key={i}>
              <ListIcon as={icon} mb={0.5} color="#fad121" />
              {val}
            </ListItem>
          ))}
        </List>

        <Show below="lg">
          <Links direction="column" />
        </Show>
      </Flex>
    </animated.div>
  );
};
