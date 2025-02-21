const LIGHT_RADIUS = 200
const LIGHT_1_SPEED_FACTOR = 1
const LIGHT_2_SPEED_FACTOR = 0.6

let totalTime = 0;
function createAnimations(light1, light2) {
  const lightAnimation = {
    tick(deltaTime) {
      totalTime += deltaTime;
      light1.position.set(
        LIGHT_RADIUS * Math.cos(totalTime * LIGHT_1_SPEED_FACTOR),
        LIGHT_RADIUS * Math.sin(totalTime * LIGHT_1_SPEED_FACTOR),
        100,
      );
      light2.position.set(
        LIGHT_RADIUS * Math.cos(totalTime * LIGHT_2_SPEED_FACTOR),
        100,
        LIGHT_RADIUS * Math.sin(totalTime * LIGHT_2_SPEED_FACTOR),
      );
    }
  }

  return [lightAnimation];
}

export { createAnimations };
