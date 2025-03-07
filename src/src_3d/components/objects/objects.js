import {updateSize} from "~/src_3d/components/models/setupModel";
import {createBox} from "./box.js";

export function createObjects() {
  return (
    createBox()
  ).concat(
    // createTetris()
  ).map((obj) => {
    // obj.receiveShadow = true;
    // obj.castShadow = true;
    if (obj.tick === undefined) {
      obj.tick = () => {
      };
    }
    return updateSize(obj);
  });
}
