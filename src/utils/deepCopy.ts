function deepClone(obj: any) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const result: any = Array.isArray(obj) ? [] : {};

  for (let key of Object.keys(obj)) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}

export default deepClone;
