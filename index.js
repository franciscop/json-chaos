import dotProp from "dot-prop";

const getPaths = (obj, path = "") => {
  if (["bool", "string", "number"].includes(typeof obj)) {
    return [null];
  }
  if (typeof obj === "object") {
    return Object.keys(obj)
      .map(k => getPaths(obj[k], k).map(sub => (sub ? k + "." + sub : k)))
      .flat();
  }
};

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

const rotate = val => {
  const types = {};
  return values[typeof val];
};

export default (obj, level = 100) => {
  const cloned = JSON.parse(JSON.stringify(obj));
  const paths = getPaths(obj);
  for (let i = 0; i < level; i++) {
    // Pick a random path from all the paths
    const path = pick(paths);

    // No more paths to iterate
    if (!path) continue;

    // Remove it so we don't change it again
    paths.splice(paths.indexOf(path), 1);
    const val = dotProp.get(cloned, path);
    dotProp.set(cloned, path, rotate(val));
  }
  return cloned;
};
