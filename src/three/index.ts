import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { objects } from "./objects";
import { renderTarget } from "./core/renderTarget";
import { threeSizes } from "./utils/sizes";
import { resources } from "../utils/resources";
import { raycast } from "./utils/raycast";

let canvas: HTMLCanvasElement | null = null;

const initializeThree = () => {
  if (!canvas) return;

  threeSizes.init(canvas);
  camera.init();
  renderTarget.init();
  renderer.init(canvas);

  objects.init();
  raycast.init();
};

const init = (_canvas: HTMLCanvasElement) => {
  canvas = _canvas;

  // Resources may already be loaded while the visitor
  // is choosing an experience on the gateway.
  if (resources.isReady) {
    initializeThree();
    return;
  }

  resources.once("ready", initializeThree);
};
const destroy = () => {
  threeSizes.destroy();
  renderTarget.destroy();
  renderer.destroy();
  objects.destroy();
  camera.destroy();
  canvas = null;
};

export const three = { init, destroy };
