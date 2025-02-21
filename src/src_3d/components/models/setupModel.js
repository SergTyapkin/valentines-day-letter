import {Box3, Vector3} from "three";

export function setupModel(data) {
  const model = data.scene.children[0];
  updateSize(model)
  model.scale.multiplyScalar(100 / (Math.max(model.size.x, model.size.y, model.size.z)));
  updateSize(model);

  model.castShadow = true;
  model.receiveShadow = true;


  const animation = data.animations[0];
  return [model, animation];
}

export function updateSize(model) {
  let box = new Box3().setFromObject(model);
  model.size = new Vector3(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z,
  )
  model.center = new Vector3(
    (box.max.x + box.min.x) / 2,
    (box.max.y + box.min.y) / 2,
    (box.max.z + box.min.z) / 2,
  )
  return model;
}
