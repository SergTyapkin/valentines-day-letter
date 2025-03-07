import { createModels, loadableObjects as modelsLoadableObjects } from './components/models/models.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createObjects } from './components/objects/objects.js';

import { createControls } from './systems/Controls.js';
import { createComposer } from './systems/Renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { BoxGeometry, BoxHelper, Mesh, SpotLightHelper } from "three";
import { updateSize } from "./components/models/setupModel.js";
import { createSkybox, loadableObjects as skyboxLoadableObjects } from "./components/skybox.js";
import AssetsTrackerLoader from "~/src_3d/AssetsTrackerLoader";
import { createAnimations } from "~/src_3d/components/animations";


let camera;
let controls;
let composer;
let renderer;
let scene;
let loop;
let lights = [];
let models = [];
let animationMixers = [];
let animations = [];
let skybox;
let objects = [];
let resizer;

export default class World {
  isRunning = false

  constructor(container) {
    camera = createCamera();
    scene = createScene();
    const composerAndRenderer = createComposer(scene, camera);
    composer = composerAndRenderer.composer;
    renderer = composerAndRenderer.renderer;
    controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer, composer);
    lights = createLights();
    animations = createAnimations(lights[0], lights[1]);

    container.append(renderer.domElement);
    loop.updatables.push(controls);
    scene.add(...lights);
    // scene.add(new SpotLightHelper(lights[0]));

    resizer = new Resizer(container, camera, renderer, composer);
  }

  async loadAllResources() {
    AssetsTrackerLoader.startAllLoads();
    for (const loadableObjects of [modelsLoadableObjects, skyboxLoadableObjects]) {
      for (const key of Object.keys(loadableObjects)) {
        loadableObjects[key] = await loadableObjects[key];
        console.debug("Check loading resource:", key, loadableObjects[key])
      }
    }
  }

  async init() {
    await this.loadAllResources();

    const {models: loadedModels, animations: loadedAnimations} = createModels();
    models = loadedModels;
    animationMixers = loadedAnimations;
    // scene.add(new BoxHelper(models[0]));
    // const minY = models.reduce((min, cur) => {
    //   updateSize(cur);
    //   return Math.min(min, -cur.size.y / 2);
    // }, -models[0].size.y / 2);
    objects = createObjects();
    // skybox = await createSkybox();

    scene.add(...models);
    scene.add(...objects);
    // scene.add(skybox);

    loop.updatables.push(...objects);
    loop.updatables.push(...animationMixers);
    loop.updatables.push(...animations);

    resizer.update();
  }

  async initControls(requestPermissions = true) {
    await controls.init(requestPermissions);
    resizer.update();
  }

  start() {
    loop.start();
    this.isRunning = true;
  }

  stop() {
    loop.stop();
    this.isRunning = false;
  }

  dispose() {
    this.stop();
    // camera.dispose();
    controls.dispose();
    composer.dispose();
    renderer.dispose();
    // scene.dispose();
    // lights.forEach(l => l.dispose());
    // models.forEach(m => m.dispose());
    // objects.forEach(o => o.dispose());
    // skybox.dispose();
    resizer.dispose();
    renderer.domElement.remove();

    AssetsTrackerLoader.disposeAll();
  }
}
