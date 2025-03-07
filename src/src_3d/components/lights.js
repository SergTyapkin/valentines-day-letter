import {DirectionalLight, HemisphereLight, AmbientLight, SpotLight} from "three";


function createLights() {
  const ambientLight = new HemisphereLight(
    0xFFEEBB,
    0x134050,
    2,
  );

  const blicksTopBack = new DirectionalLight(
    0xFFFFFF, 2
  );
  blicksTopBack.position.set(200, 200, -200);
  // blicksTopBack.castShadow = true;


  const blicksTopFront = new DirectionalLight(
    0x99FFAA, .5
  );
  blicksTopFront.position.set(200, 100, 200);
  // blicksTopFront.castShadow = true;

  const blicksMiddleLeftFront = new DirectionalLight(
    0xDDFFAA, 1
  );
  blicksMiddleLeftFront.position.set(-200, 200, 100);
  // blicksMiddleLeft.castShadow = true;

  const spotlightMiddleLeftBack = new SpotLight(
    0xFFFFFF,10
  );
  spotlightMiddleLeftBack.position.set(-100,100,-100);
  // L3.castShadow = true;

  const blicksAnimablePos1 = new DirectionalLight(
    0xDDFFAA, 1
  );
  const blicksAnimablePos2 = new DirectionalLight(
    0xDDFFAA, 1
  );

  return [blicksAnimablePos1, blicksAnimablePos2, blicksMiddleLeftFront, ambientLight, blicksTopBack, blicksTopFront, spotlightMiddleLeftBack];
}

export { createLights };
