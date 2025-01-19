import {
  bedrockImg,
  blockCopperImg,
  blockDiamondImg,
  blockEmeraldImg,
  blockGoldImg,
  blockIronImg,
  blockLapisLazuliImg,
  blockNetheriteImg,
  blockObsidianImg,
  blockQuartzImg,
  blockRedstoneImg,
  bricksDeepslateImg,
  bricksImg,
  clayImg,
  cobbleImg,
  cobbleDeepslateImg,
  dirtImg,
  glassImg,
  grassImg,
  leavesImg,
  logImg,
  netherrackImg,
  sandImg,
  shroomlightImg,
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
const blockNetheriteTexture = new TextureLoader().load(blockNetheriteImg);
const blockObsidianTexture = new TextureLoader().load(blockObsidianImg);
const blockQuartzTexture = new TextureLoader().load(blockQuartzImg);
const blockRedstoneTexture = new TextureLoader().load(blockRedstoneImg);
const bricksDeepslateTexture = new TextureLoader().load(bricksDeepslateImg);
const bricksTexture = new TextureLoader().load(bricksImg);
const clayTexture = new TextureLoader().load(clayImg);
const cobbleTexture = new TextureLoader().load(cobbleImg);
const cobbleDeepslateTexture = new TextureLoader().load(cobbleDeepslateImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const grassTexture = new TextureLoader().load(grassImg);
const leavesTexture = new TextureLoader().load(leavesImg);
const logTexture = new TextureLoader().load(logImg);
const netherrackTexture = new TextureLoader().load(netherrackImg);
const sandTexture = new TextureLoader().load(sandImg);
const shroomlightTexture = new TextureLoader().load(shroomlightImg);
const woodTexture = new TextureLoader().load(woodImg);

bedrockTexture.magFilter = NearestFilter;
blockCopperTexture.magFilter = NearestFilter;
blockDiamondTexture.magFilter = NearestFilter;
blockEmeraldTexture.magFilter = NearestFilter;
blockGoldTexture.magFilter = NearestFilter;
blockIronTexture.magFilter = NearestFilter;
blockLapisLazuliTexture.magFilter = NearestFilter;
blockNetheriteTexture.magFilter = NearestFilter;
blockObsidianTexture.magFilter = NearestFilter;
blockQuartzTexture.magFilter = NearestFilter;
blockRedstoneTexture.magFilter = NearestFilter;
bricksDeepslateTexture.magFilter = NearestFilter;
bricksTexture.magFilter = NearestFilter;
clayTexture.magFilter = NearestFilter;
cobbleDeepslateTexture.magFilter = NearestFilter;
cobbleTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
leavesTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
netherrackTexture.magFilter = NearestFilter;
sandTexture.magFilter = NearestFilter;
shroomlightTexture.magFilter = NearestFilter;
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
  blockNetheriteTexture,
  blockObsidianTexture,
  blockQuartzTexture,
  blockRedstoneTexture,
  bricksDeepslateTexture,
  bricksTexture,
  clayTexture,
  cobbleTexture,
  cobbleDeepslateTexture,
  dirtTexture,
  glassTexture,
  grassTexture,
  groundTexture,
  leavesTexture,
  logTexture,
  netherrackTexture,
  sandTexture,
  shroomlightTexture,
  woodTexture,
}
