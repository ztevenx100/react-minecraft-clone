import {
  bedrockImg,
  blockCopperImg,
  blockDiamondImg,
  blockEmeraldImg,
  blockGoldImg,
  blockIronImg,
  blockLapisLazuliImg,
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

const bedrockTexture = new TextureLoader().load(bedrockImg);
const blockCopperTexture = new TextureLoader().load(blockCopperImg);
const blockDiamondTexture = new TextureLoader().load(blockDiamondImg);
const blockEmeraldTexture = new TextureLoader().load(blockEmeraldImg);
const blockGoldTexture = new TextureLoader().load(blockGoldImg);
const blockIronTexture = new TextureLoader().load(blockIronImg);
const blockLapisLazuliTexture = new TextureLoader().load(blockLapisLazuliImg);
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

bedrockTexture.magFilter = NearestFilter;
blockCopperTexture.magFilter = NearestFilter;
blockDiamondTexture.magFilter = NearestFilter;
blockEmeraldTexture.magFilter = NearestFilter;
blockGoldTexture.magFilter = NearestFilter;
blockIronTexture.magFilter = NearestFilter;
blockLapisLazuliTexture.magFilter = NearestFilter;
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
  bedrockTexture,
  blockCopperTexture,
  blockDiamondTexture,
  blockEmeraldTexture,
  blockGoldTexture,
  blockIronTexture,
  blockLapisLazuliTexture,
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
