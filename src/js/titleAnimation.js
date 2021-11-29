import * as PIXI from 'pixi.js';

import titleImage from '../assets/images/title-1.png';
import displacementMap from '../assets/images/displacement-map.jpeg';

const app = new PIXI.Application({
  width: 1085,
  height: 85,
  transparent: true,
});

const title = document.querySelector('.header__title--js');

title.appendChild(app.view);

app.stage.interactive = true;

const container = new PIXI.Container();
app.stage.addChild(container);

const flag = PIXI.Sprite.from(titleImage);
container.addChild(flag);
flag.width = app.screen.width - 20;
flag.height = app.screen.height - 20;
flag.x = 10;
flag.y = 10;

const displacementSprite = PIXI.Sprite.from(displacementMap);

// Make sure the sprite is wrapping.
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
const displacementFilter = new PIXI.filters.DisplacementFilter(
  displacementSprite,
);
displacementFilter.padding = 10;

displacementSprite.position = flag.position;

app.stage.addChild(displacementSprite);

flag.filters = [displacementFilter];

displacementFilter.scale.x = 50;
displacementFilter.scale.y = 70;

app.ticker.add(() => {
  // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
  displacementSprite.x++;
  // Reset x to 0 when it's over width to keep values from going to very huge numbers.
  if (displacementSprite.x > displacementSprite.width) {
    displacementSprite.x = 0;
  }
});
