export function randomGen(min, max) {
  // inclusive of max
  const scale = max - min;
  return min + scale * Math.random();
}

export function randomGenInt(min, max) {
  // inclusive of max
  return Math.round(randomGen(min - .5, max + .5));
}