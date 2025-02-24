import {
  EquirectangularReflectionMapping,
  Mesh,
  MeshBasicMaterial, MeshNormalMaterial,
  MeshPhongMaterial, MeshPhysicalMaterial, RepeatWrapping,
  Shape, SphereGeometry,
  TextureLoader, Vector2,
} from "three";
import TEXTURE_NORMAL_MAP_ROUGH_MATERIAL_URL from '/static/images/normal_maps/rough_material.jpg';
import TEXTURE_ENV_MAP_EMPTY_WAREHOUSE_URL from '/static/images/environment_maps/empty_warehouse.hdr';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader';
import {randomBetween} from "~/utils/utils";
import {Load, TrackAsset} from "~/src_3d/AssetsTrackerLoader";

export async function createTetris() {
//   // Create materials
  const [textureNormalMapRoughMaterial, textureEnvMapEmptyWarehouse] = await Promise.all([
    Load(TextureLoader, TEXTURE_NORMAL_MAP_ROUGH_MATERIAL_URL),
    Load(RGBELoader, TEXTURE_ENV_MAP_EMPTY_WAREHOUSE_URL),
  ]);
  textureNormalMapRoughMaterial.wrapS = RepeatWrapping;
  textureNormalMapRoughMaterial.wrapT = RepeatWrapping;
  textureEnvMapEmptyWarehouse.mapping = EquirectangularReflectionMapping;

  const mat1 = TrackAsset(new MeshBasicMaterial({
    color: 0x000000,
  }));
//   const mat2 = TrackAsset(new MeshPhongMaterial({
//     color: 0x105942,
//     shininess: 100,
//   }));
//   const mat3 = TrackAsset(new MeshPhysicalMaterial({
//     // color: 0xFF8888,
//     transmission: 1,
//     roughness: 0.2,
//     thickness: 3,
//     clearcoat: true,
//     clearcoatRoughness: 0.5,
//     ior: 1.5,
//     // sheen: 1,
//     // sheenRoughness: 0.3,
//     // sheenColor: 0xFF5555,
//     envMap: textureEnvMapEmptyWarehouse,
//     envMapIntensity: 1,
//     normalMap: textureNormalMapRoughMaterial,
//     clearcoatNormalMap: textureNormalMapRoughMaterial,
//     normalScale: new Vector2(.2, .2),
//     clearcoatNormalScale: new Vector2(10, 10),
//   }));
//
//
//   const mat4 = TrackAsset(new MeshNormalMaterial({
//     // color: 0xF05942,
//     wireframe: WIREFRAMED,
//   }));
//
//   // Calculate all meshes coordinates by config
//   const totalMeshes = [];
//   TETRIS_CONFIG.forEach((blockConfig) => {
//     const shape = generateShape(blockConfig.contour);
//     const {box: boxGeometry, frontFace: frontFaceGeometry} = generateBeveledGeometry(shape);
//     TrackAsset(boxGeometry);
//     TrackAsset(frontFaceGeometry);
//     const beveledMesh = TrackAsset(new Mesh(boxGeometry, mat4));
//     beveledMesh.position.z = -BEVEL_HEIGHT + BLOCK_DEPTH;
//     beveledMesh.position.y = -BOX_HEIGHT / 2 + THICKNESS;
//     beveledMesh.position.x = BOX_WIDTH / 2 - THICKNESS;
//     totalMeshes.push(beveledMesh);
//
//     const uvRepeat = computeUVs(frontFaceGeometry);
//     const curMat = TrackAsset(mat3.clone());
//     curMat.normalMap = TrackAsset(mat3.normalMap.clone());
//     curMat.normalMap.repeat.set(uvRepeat[0] * NORMAL_MAP_REPEAT, uvRepeat[1] * NORMAL_MAP_REPEAT);
//     curMat.normalMap.needsUpdate = true;
//
//     const frontFaceMesh = TrackAsset(new Mesh(frontFaceGeometry, curMat));
//     frontFaceMesh.position.z = 0;
//     frontFaceMesh.position.y = 300;
//     frontFaceMesh.position.y = -BOX_HEIGHT / 2 + THICKNESS;
//     frontFaceMesh.position.x = BOX_WIDTH / 2 - THICKNESS;
//     totalMeshes.push(frontFaceMesh);
//
//     addTickMotionFunctionOnObjects(beveledMesh, frontFaceMesh);
//   });

  const sphereGeo = TrackAsset(new SphereGeometry(1, 5, 5));
  const centerSphere = TrackAsset(new Mesh(sphereGeo, mat1));

  // return [centerSphere, ...totalMeshes];
  return [];
}
