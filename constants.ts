import { content } from "./content";

export const DEGREE_PER_BALL = 360 / content.length;

const radians = DEGREE_PER_BALL * (Math.PI / 180);
export const RADIUS = 125;

export const BALLS = new Array(content.length).fill(null).map((_, i) => {
  const theta = i * radians;

  const deltaX = RADIUS * Math.sin(theta);
  const deltaY = RADIUS * Math.cos(theta);
  return [deltaX, deltaY];
});

export const BALL_SIZE = 40;

export const DROPBOX_SIZE = 50;

export const ARROWS = BALLS.map(([x, y]) => [x * 0.55, y * 0.55]);
