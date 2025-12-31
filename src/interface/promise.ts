declare global {
  interface PromiseConstructor {
    delay(ms: number): Promise<void>;
  }

  interface Promise<T> {
    timeout(ms: number, message?: string): Promise<T>;
  }
}

export {};
