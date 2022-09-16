// Displacement filter - https://pixijs.io/examples/#/filters-basic/displacement-map-crawlies.js
// Demo -  https://codepen.io/inlet/pen/JjYMLpp

import {
  Stage,
  withFilters,
  Container,
  Sprite,
  useTick,
} from "@inlet/react-pixi";
import React from "react";

import * as PIXI from "pixi.js";

const width = 800;
const height = 600;
const backgroundColor = 0x1d2330;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter,
});

const config = {
  displacement: {
    x: 1,
    y: 1,
  },
};

const Figure = ({ config }) => {
  const displacementSpriteRef = React.useRef();
  const [renderFilter, setRenderFilter] = React.useState(false);

  React.useEffect(() => {
    displacementSpriteRef.current.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    setRenderFilter(true);
  }, []);

  return (
    <>
      <Sprite
        {...config}
        image="https://pixijs.io/examples/examples/assets/pixi-filters/displacement_map_repeat.jpg"
        ref={displacementSpriteRef}
      />
      {renderFilter && (
        <Filters
          displacement={{
            construct: [displacementSpriteRef.current],
            scale: { x: config.y, y: config.y },
          }}
        >
          <Sprite
            anchor={0.5}
            scale={0.5}
            x={width / 2}
            y={height / 2}
            image="/face.jpg"
          />
        </Filters>
      )}
    </>
  );
};

export default function PixiWarp() {
  const ref = React.useRef();
  const [displacementConfig, setDisplacementConfig] = React.useState({
    ...config.displacement,
    scale: 0,
  });

  React.useEffect(() => {
    if (!ref.current) return;
    const move = (ev) => {
      let pos = { x: ev.clientX, y: (ev.clientY * 100) / window.innerHeight };
      setDisplacementConfig(pos);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [ref.current]);

  return (
    <div>
      <h1>Warping with Pixi.js</h1>
      <div ref={ref}>
        <Stage width={width} height={height} options={{ backgroundColor }}>
          <Figure config={displacementConfig} />
        </Stage>
      </div>
    </div>
  );
}
