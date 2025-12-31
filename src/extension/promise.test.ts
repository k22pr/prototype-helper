import "./promise";

describe("Promise Extensions", () => {
  describe("Promise.delay", () => {
    it("should delay execution", async () => {
      const start = Date.now();
      await Promise.delay(100);
      const end = Date.now();
      expect(end - start).toBeGreaterThanOrEqual(100);
    });
  });

  describe("Promise.prototype.timeout", () => {
    it("should resolve if promise completes before timeout", async () => {
      const p = new Promise((resolve) => setTimeout(() => resolve("done"), 50));
      const result = await p.timeout(100);
      expect(result).toBe("done");
    });

    it("should reject if promise times out", async () => {
      const p = new Promise((resolve) => setTimeout(() => resolve("done"), 150));
      await expect(p.timeout(50)).rejects.toThrow("Operation timed out");
    });

    it("should reject with custom message", async () => {
      const p = new Promise((resolve) => setTimeout(() => resolve("done"), 150));
      await expect(p.timeout(50, "too slow")).rejects.toThrow("too slow");
    });
  });
});
