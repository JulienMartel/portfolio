import { content } from "./content";

export const DEGREE_PER_BALL = 360 / content.length;

const radians = DEGREE_PER_BALL * (Math.PI / 180);
export const RADIUS = 5;

export const BALLS = new Array(content.length).fill(null).map((_, i) => {
  const theta = i * radians;

  const deltaX = RADIUS * Math.sin(theta);
  const deltaZ = RADIUS * Math.cos(theta);
  return [deltaX, deltaZ];
});

export const BALL_SIZE = 40;

export const DROPBOX_SIZE = 55;

export const ARROWS = BALLS.map(([x, y]) => [x * 0.55, y * 0.55]);
