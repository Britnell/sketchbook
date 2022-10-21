import { linearScale, limit } from "./util";

describe(" Testing util functions ", () => {
  test(" hello world", () => {
    expect(1 + 1).toBe(2);
  });
});

describe(" linear scale ", () => {
  for (let x = 0; x < 5; x++) {
    const v = Math.random();
    test(` scaling ${v} from 0,1 to 0,100 `, () => {
      const scaled = linearScale(v, 0, 1, 0, 100);
      const expected = v * 100;
      expect(scaled).toBe(expected);
    });
  }
});

describe(" test limit ", () => {
  const ranges = [
    [0, 100],
    [0, 1],
    [10, 50],
    [-1, 0],
    [100, 150],
  ];
  const val = Math.floor(Math.random() * 100);

  ranges.forEach(([min, max]) => {
    test(` val: ${val} => limit(${min},${max})`, () => {
      let lim = limit(val, min, max);
      if (val < min) expect(lim).toBe(min);
      else if (val > max) expect(lim).toBe(max);
      else {
        expect(lim).toBeGreaterThanOrEqual(min);
        expect(lim).toBeLessThanOrEqual(max);
      }
    });
  });
});
