import deepClone from 'deep-clone'

Object.prototype.deepClone = function () {
  return deepClone(this);
}

Object.prototype.toString = function () {
  return JSON.stringify(this);
}