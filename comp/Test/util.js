export const linearScale = (x, xmin, xmax, ymin, ymax) =>
  ymin + ((ymax - ymin) * (x - xmin)) / (xmax - xmin);

export const vecMax = (vec, max) => {
  if (vec.x > max) vec.x = max;
  else if (vec.x < -max) vec.x = -max;

  if (vec.y > max) vec.y = max;
  else if (vec.y < -max) vec.y = -max;
};

export const limit = (x, min, max) => {
  if (x < min) return min;
  if (x > max) return max;
  return x;
};

export const vecThreshold = (vec, thr) => {
  if (Math.abs(vec.x) < thr) vec.x = 0;
  if (Math.abs(vec.y) < thr) vec.y = 0;
};

export const randomInt = (min, max) =>
  min + Math.floor(Math.random() * (max - min));
