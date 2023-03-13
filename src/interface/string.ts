interface StringConstructor {
  fixPoint(length: number): string;
  fixNumber(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(): string;
  toNumber(): number;
  addSymbol(space?: string): string;
  fromJSON<T>(): T;
  issetWord(word: string): boolean;
  getChar(index: number): string;
  isNumber(): boolean;

}

interface String {
  fixPoint(length: number): string;
  fixNumber(length: number): string;
  leadingChars(chars: string | number, length: number): string;
  toComma(): string;
  toNumber(): number;
  addSymbol(space?: string): string;
  fromJson<T>(): T;
  issetWord(word: string): boolean;
  getChar(index: number): string;
  isNumber(): boolean;
}