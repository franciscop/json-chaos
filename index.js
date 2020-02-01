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

const values = {
  string: () => pick(["hello", "world", "how", "are", "you"]),
  boolean: () => pick([true, false]),
  number: () => Math.floor(Math.random() * 10000)
};

const rotate = val => {
  const type = typeof val;
  const dest = pick(Object.keys(values).filter(type => type !== typeof val));
  return values[dest]();
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
