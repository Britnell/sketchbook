export const getRaf = (window) =>
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame;

export const asStr = (x) => (typeof x === "string" ? x : x.toString());
