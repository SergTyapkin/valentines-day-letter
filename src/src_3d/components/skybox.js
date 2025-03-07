import {
  BackSide,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  TextureLoader
} from "three";
import {Load} from "~/src_3d/AssetsTrackerLoader";


const path = "./assets/skyboxes/cliffs/";
const extension = ".png";
const imageNames = ["ft", "bk", "up", "dn", "rt", "lf"];
const loadableObjects = {};
// imageNames.forEach((name) => loadableObjects[name] = Load(TextureLoader, path + name + extension));

function createSkybox() {

  const materialArray = Object.values(loadableObjects).map((texture) => {
    const material = new MeshBasicMaterial( { map: texture });
    material.side = BackSide;
    return material;
  });

  const skyboxGeo = new BoxGeometry( 10000, 10000, 10000);

  return new Mesh(skyboxGeo, materialArray);
}

export {createSkybox, loadableObjects};
