// can parse string of url hash or query
const parseurlargs = (url: string) => {
  // for empty query / hash
  if (!url) return;

  // remove first char '#' or '?'
  const list = url.slice(1).split("&");

  // parse pairs into object
  const params = {};
  list.forEach((param) => {
    const pair = param.split("=");
    if (pair.length === 2) params[pair[0]] = pair[1];
  });
  return params;
};

export default parseurlargs;
