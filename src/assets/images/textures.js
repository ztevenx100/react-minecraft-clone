import {
  blockDiamondImg,
  blockGoldImg,
  blockObsidianImg,
  bricksImg,
  clayImg,
  cobbleImg,
  dirtImg,
  glassImg,
  grassImg,
  leavesImg,
  logImg,
  woodImg,
} from './images.js';

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';

const blockDiamondTexture = new TextureLoader().load(blockDiamondImg);
const blockGoldTexture = new TextureLoader().load(blockGoldImg);
const blockObsidianTexture = new TextureLoader().load(blockObsidianImg);
const bricksTexture = new TextureLoader().load(bricksImg);
const clayTexture = new TextureLoader().load(clayImg);
const cobbleTexture = new TextureLoader().load(cobbleImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const grassTexture = new TextureLoader().load(grassImg);
const leavesTexture = new TextureLoader().load(leavesImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);

blockDiamondTexture.magFilter = NearestFilter;
blockGoldTexture.magFilter = NearestFilter;
blockObsidianTexture.magFilter = NearestFilter;
bricksTexture.magFilter = NearestFilter;
clayTexture.magFilter = NearestFilter;
cobbleTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
leavesTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

const groundTexture = new TextureLoader().load(grassImg);
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;


export {
  blockDiamondTexture,
  blockGoldTexture,
  blockObsidianTexture,
  bricksTexture,
  clayTexture,
  cobbleTexture,
  dirtTexture,
  glassTexture,
  grassTexture,
  groundTexture,
  leavesTexture,
  logTexture,
  woodTexture,
}
