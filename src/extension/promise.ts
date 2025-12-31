Promise.delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

Promise.prototype.timeout = function <T>(
  this: Promise<T>,
  ms: number,
  message = "Operation timed out"
): Promise<T> {
  return Promise.race([
    this,
    new Promise<never>((_, reject) => setTimeout(() => reject(new Error(message)), ms)),
  ]);
};

export {};
