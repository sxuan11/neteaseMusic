function getUUID(x = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", t = 0) {
  return x.replace(/[xy]/g, function (x) {
    let r = 16 * Math.random() | 0,
      n = "x" === x ? r : 3 & r | 8;
    let uuid;
    return uuid = t ? n.toString(36).toUpperCase() : n.toString(36),
      uuid
  })
}

console.log(getUUID());
