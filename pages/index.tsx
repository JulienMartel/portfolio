import type { NextPage } from 'next'
import { Flex, Stack, Text, Box } from '@chakra-ui/react'
import { useDrag } from '@use-gesture/react'
import { useSpring, animated, useSprings } from '@react-spring/web'
import { useRef, useState } from 'react'
import useMeasure from 'react-use-measure'

const amountOfSpheres = 6

const colors = [
  "#669CA3",
  "#AAFF99",
  "#FFC085",
  "#FFE95C",
  "#CA8ECD",
  "#FF9999",
]

const Home: NextPage = () => {
  const dropBoxRef = useRef<HTMLDivElement>(null)

  const degrees = 360 / amountOfSpheres
  const radiansPerBall = degrees * (Math.PI / 180)

  const balls = new Array(amountOfSpheres).fill(null).map((_, i) => {
    const r = 200
    const theta = ((i + 1) * radiansPerBall)

    const deltaX = r * Math.sin(theta)
    const deltaY = r * Math.cos(theta)
    return [deltaX, deltaY]
  })

  // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const [props, api] = useSprings(amountOfSpheres, i => ({
    from: { x: balls[i][0], y: balls[i][1] }
  }))

  const [isDropped, setIsDropped] = useState(false)

  const [dragIndex, setDragIndex] = useState<number>(0)

  const bind = useDrag((state) => {
    // console.log(state)
    const {
      movement: [mx, my],
      down,
      args: [index],
      xy: [x, y],
      offset: [offX, offY],
      active
    } = state

    if (active) {
      setDragIndex(index)
    }


    const dropBoxX = Number(dropBoxRef.current?.offsetLeft)
    const dropBoxY = Number(dropBoxRef.current?.offsetTop)

    const apiFn = (i: number) => { 
      if (index !== i) return
      // if (isDropped) console.log("yes")
      return {
        x: down ? balls[i][0] + mx : balls[i][0], 
        y: down ? balls[i][1] + my : balls[i][1], 
        immediate: down 
      }
    }
    api.start(apiFn)

    if ( //theyre hovering over drop zone
      Math.abs(x - dropBoxX) < 80 && x - dropBoxX > 0 &&
      Math.abs(dropBoxY - y) < 80 && y - dropBoxY > 0
    ) {
      setHovering(true)

      if (!active) {
        api.pause()
        setIsDropped(true)
      }
    } else {
      setHovering(false)
    }

  }, { pointer: {capture: true} })

  const [hovering, setHovering] = useState(false)
  const dropBoxProps = useSpring({ width: hovering ? "100%" : "0" })


  const newPageProps = useSpring({
    transform: isDropped ? "scale(3000)" : "scale(0)",
    config: {
      mass: 2.2,
      // tension: 50,
      // friction: 50,
      
    }
  })

  const closeButtonProps = useSpring({
    opacity: isDropped ? 1 : 0,
    display: isDropped ? "block" : "none"
  })

  const close = () => {
    setIsDropped(false)

    setTimeout(() => {
      setHovering(false)
      api.resume()
    }, 700)
  }


  return <Flex h="100vh" overflow="hidden" bg="off.black">
    <Stack pos="absolute" bottom="0" m="4" fontWeight="black" fontSize="5xl" color="off.white" spacing="0" lineHeight="10">
      <Text>Julien</Text>
      <Text>B.</Text>
      <Text>Martel</Text>
    </Stack>

    <Flex overflow="hidden" justify="center" align="center" position="absolute" top={0} bottom={0} left={0} right={0} >
      <Flex justify="center" align="center" h="full" w="75%">
        <Flex w="50%" sx={{aspectRatio: "1"}} justify="center" align="center">
          <Box 
            ref={dropBoxRef}
            boxSize="80px"
            border="4px solid"
            borderColor="off.white"
            rounded="lg"
            pos="relative"
          >
            <animated.div style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: colors[dragIndex],
              height: "100%",
              ...dropBoxProps
              }}/>

            <animated.div
              style={{
                width: "1px", 
                height: "1px",
                position: "absolute",
                top: 40,
                left: 40,
                // backgroundColor: "var(--chakra-colors-off-white)",
                zIndex: 5,
                backgroundColor: colors[dragIndex],
                borderRadius: "100%",
                ...newPageProps
              }}
            />
          </Box>
        </Flex>

        <animated.button style={{height: "min-content",zIndex: 10, ...closeButtonProps}} onClick={close}>
          <Text fontSize="3xl" fontWeight="black" >x</Text>
        </animated.button>

        <Flex w="50%" sx={{aspectRatio: "1"}}  justify="center" align="center">
          {props.map(({x, y}, i) => (
            <animated.div
              key={i} 
              style={{
                x,
                y,
                height: "60px",
                width: "60px",
                borderRadius: "100%",
                position: "absolute",
                backgroundColor: colors[i],
                cursor: "pointer",
                touchAction: "none",
              }}
              {...bind(i)}

            />
          ))}
        </Flex>


      </Flex>
    </Flex>
  </Flex>
}

export default Home
