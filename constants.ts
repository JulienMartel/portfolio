import { content } from "./content";

export const DEGREE_PER_BALL = 360 / content.length;

const radians = DEGREE_PER_BALL * (Math.PI / 180);
const radius = 200;

export const BALLS = new Array(content.length).fill(null).map((_, i) => {
  const theta = i * radians;

  const deltaX = radius * Math.sin(theta);
  const deltaY = radius * Math.cos(theta);
  return [deltaX, deltaY];
});

export const ARROWS = BALLS.map(([x, y]) => [x * 0.55, y * 0.55]);
