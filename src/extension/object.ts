import deepClone from 'deep-clone';

Object.prototype.deepClone = function () {
  return deepClone(this);
};

Object.prototype.stringify = function () {
  return JSON.stringify(this);
};