export function randomGen(min: number, max: number): number {
  // inclusive of max
  const scale = max - min;
  return min + scale * Math.random();
}

export function randomGenInt(min: number, max: number) {
  // inclusive of max
  return Math.round(randomGen(min - .5, max + .5));
}