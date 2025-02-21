import {setupModel, updateSize} from './setupModel.js';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import {Load, TrackAsset} from "~/src_3d/AssetsTrackerLoader";
import {
  AnimationMixer,
  EquirectangularReflectionMapping, Mesh, MeshPhongMaterial,
  MeshPhysicalMaterial,
  RepeatWrapping,
  TextureLoader, Vector2
} from "three";
import TEXTURE_NORMAL_MAP_ROUGH_MATERIAL_URL from "../../../../static/images/normal_maps/rough_material.jpg";
import {RGBELoader} from "three/addons/loaders/RGBELoader";
import TEXTURE_ENV_MAP_EMPTY_WAREHOUSE_URL from "../../../../static/images/environment_maps/empty_warehouse.hdr";

async function loadModels() {
  const loaderGLTF = new GLTFLoader();
  const loaderSTL = new STLLoader();

  const modelsGLTF = await Promise.all([
    loaderGLTF.loadAsync('/models/animated_pretty_heart.glb'),
  ]);
  TrackAsset(...modelsGLTF);
  const modelsSTL = await Promise.all([
    loaderSTL.loadAsync('/models/hearts_around.stl'),
    loaderSTL.loadAsync('/models/pretty_heart.stl'),
  ]);
  TrackAsset(...modelsSTL);

  const modelsObjects = [];
  const animationMixersObjects = [];
  modelsGLTF.forEach((data, idx) => {
    const [model, animation] = setupModel(data);
    const mixer = new AnimationMixer(model);
    const action = mixer.clipAction(animation);
    action.play();

    model.position.sub(model.center);
    modelsObjects.push(model);
    mixer.tick = (deltaTime) => {return mixer.update(deltaTime)};
    animationMixersObjects.push(mixer);
  });

  const [textureNormalMapRoughMaterial, textureEnvMapEmptyWarehouse] = await Promise.all([
    Load(TextureLoader, TEXTURE_NORMAL_MAP_ROUGH_MATERIAL_URL),
    Load(RGBELoader, TEXTURE_ENV_MAP_EMPTY_WAREHOUSE_URL),
  ]);
  textureNormalMapRoughMaterial.wrapS = RepeatWrapping;
  textureNormalMapRoughMaterial.wrapT = RepeatWrapping;
  textureEnvMapEmptyWarehouse.mapping = EquirectangularReflectionMapping;

  const mat1 = TrackAsset(new MeshPhongMaterial({
    color: 0xEE3399,
    shininess: 100,
  }));
  const mat2 = TrackAsset(new MeshPhysicalMaterial({
    // color: 0xFF8888,
    transmission: 1,
    roughness: 0.2,
    thickness: 3,
    clearcoat: true,
    clearcoatRoughness: 0.5,
    ior: 1.5,
    // sheen: 1,
    // sheenRoughness: 0.3,
    // sheenColor: 0xFF5555,
    envMap: textureEnvMapEmptyWarehouse,
    envMapIntensity: 1,
    normalMap: textureNormalMapRoughMaterial,
    clearcoatNormalMap: textureNormalMapRoughMaterial,
    normalScale: new Vector2(.2, .2),
    clearcoatNormalScale: new Vector2(10, 10),
  }));

  const heartsAround = TrackAsset(new Mesh(modelsSTL[0], mat1));
  heartsAround.rotation.x = -Math.PI / 180 * 90;
  modelsObjects.push(heartsAround);

  const heartGlass = TrackAsset(new Mesh(modelsSTL[1], mat2));
  heartGlass.rotation.x = -Math.PI / 180 * 90;
  heartGlass.scale.multiplyScalar(1.1);
  modelsObjects.push(heartGlass);

  return {models: modelsObjects, animations: animationMixersObjects}
}

export { loadModels };
