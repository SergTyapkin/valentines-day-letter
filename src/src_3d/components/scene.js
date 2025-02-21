import { Color, Scene } from "three";
import {SCENE_BG_COLOR} from "~/src_3d/constants";

function createScene() {
  const scene = new Scene();

  scene.background = new Color(SCENE_BG_COLOR);

  return scene;
}

export { createScene };
