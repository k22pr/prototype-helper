declare global {
    interface Object {
        _isEmpty(): boolean;
        _pick<K extends keyof this>(keys: K[]): Pick<this, K>;
        _omit<K extends keyof this>(keys: K[]): Omit<this, K>;
        _deepCopy<T = any>(): T;
        _toJson(): string;
        _merge(other: object): this;
        _keys(): string[];
        _values(): any[];
        _entries(): [string, any][];
        _forEach(callback: (key: string, value: any, index: number) => void): void;
    }
}

export { };
