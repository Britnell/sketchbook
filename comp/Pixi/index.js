import { Stage, Sprite, withFilters, Container } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";

const Filters = withFilters(Container, {
  blur: PIXI.filters.BlurFilter,
});

export default function Pixi() {
  return (
    <div>
      <h1>PIXI</h1>
      <Stage>
        <Sprite image="/netliheart.svg" x={100} y={100} />
        <Filters blur={{ blur: 5 }}>
          <Sprite image="/netliheart.svg" x={250} y={100} />
        </Filters>
      </Stage>
    </div>
  );
}
