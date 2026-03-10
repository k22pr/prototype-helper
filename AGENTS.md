# prototype-helper — Agent Guidelines

TypeScript npm package that extends native JavaScript prototypes (Number, String, Array, Object)
and global objects (Math, Promise) with convenience methods inspired by C# LINQ and common utilities.

---

## Commands

```bash
# Run all tests
bun test

# Run a single test file
bun test src/extension/number.test.ts

# Run tests matching a name pattern
bun test --test-name-pattern "toComma"

# Build (runs tests first, then compiles)
bun run build

# Type-check only
bun run bundle

# Lint
bun run lint

# Lint with auto-fix
bun run lint:fix

# Format
bun run format
```

---

## Project Structure

```
src/
├── index.ts            # Entry point — imports interface → extension → override in order
├── interface/          # Global TypeScript type declarations (declare global)
│   ├── number.ts
│   ├── string.ts
│   ├── array.ts
│   ├── object.ts
│   └── promise.ts
├── extension/          # Prototype implementations + co-located test files
│   ├── number.ts       + number.test.ts
│   ├── string.ts       + string.test.ts
│   ├── array.ts        + array.test.ts
│   ├── object.ts       + object.test.ts
│   └── promise.ts      + promise.test.ts
├── override/           # Global object overrides (Math, console)
│   ├── math.ts
│   └── console.ts
└── utils/              # Pure helper functions (no prototype side effects)
    ├── math.ts
    ├── binarySearch.ts
    ├── mostFrequent.ts
    └── valid.ts
```

---

## Code Style

### Formatter (Biome)
- **Indent**: 2 spaces
- **Line width**: 100 characters
- **Quotes**: double (`"`)
- **Semicolons**: always
- **Trailing commas**: ES5 style

### TypeScript
- Target: ES2016, module: CommonJS
- `strict: true`, `noImplicitAny: false` (explicit `any` is allowed)
- Non-null assertions (`!`) are allowed
- Prefer `const`; use `let` only when reassignment is necessary
- Use `import type` for type-only imports: `import type Decimal from "decimal.js"`

### Imports
- Named imports preferred over default where possible
- Order managed automatically by Biome (`organizeImports: true`)
- Path aliases: `@/*` and `~/*` map to `src/*`

---

## Prototype Extension Patterns

### Number / String — direct assignment
Simple methods are assigned directly on the prototype:
```ts
Number.prototype.toNumber = function () {
  return Number(this);
};
```

### Array / Object — `Object.defineProperty` with guard
All Array and Object extensions **must** use `Object.defineProperty` with `enumerable: false`
to prevent polluting `for...in` loops, and **must** be guarded against double-registration:
```ts
if (!Array.prototype.where) {
  Object.defineProperty(Array.prototype, "where", {
    value: function (predicate: any) { return this.filter(predicate); },
    enumerable: false,
    writable: true,
    configurable: true,
  });
}
```

### Math / Global overrides — guard + `globalThis` assignment
```ts
if (!Math.clamp) {
  Math.clamp = (input, min, max) => Math.min(Math.max(input, min), max);
}
globalThis.Math = Math;
```

---

## Adding a New Method

1. **Declare the type** in `src/interface/<type>.ts` inside `declare global { interface <Type> { ... } }`.
2. **Implement** in `src/extension/<type>.ts` following the pattern for that type (see above).
3. **Write tests** in `src/extension/<type>.test.ts` — import dependencies at the top of the test file:
   ```ts
   import "../override/math";
   import "./string";
   import "./number"; // the file under test
   ```
4. **Export** via the existing barrel `src/extension/index.ts` if the file is new.
5. **Document** the new method in `README.md` following the existing bilingual format
   (English description + Korean description + usage examples with expected output).

---

## Testing Conventions

- Runtime: **Bun test** (`bun:test`) — uses `describe`, `test`/`it`, `expect` globals
- Test files live alongside their implementation: `foo.ts` → `foo.test.ts`
- Test structure: outer `describe` per file/feature, inner `describe` per method, `test`/`it` per case
- Use both `toBe` (strict) and `toEqual` (deep) appropriately
- Floating-point comparisons: `toBeCloseTo(value, decimalPlaces)`
- Always cover: normal case, zero/empty, negative values, NaN, Infinity, edge boundaries

---

## Numeric Precision

All arithmetic on `Number.prototype` (`add`, `sub`, `mul`, `div`, `mod`, `pow`) delegates to
**`decimal.js`** to avoid floating-point precision errors. Do not use raw JS operators (`+`, `-`,
`*`, `/`) for prototype arithmetic implementations.

---

## Error Handling

- Throw plain `Error` with a descriptive prefix matching the method name:
  ```ts
  throw new Error("single: sequence contains more than one element.");
  throw new Error("max: Sequence contains no elements.");
  ```
- `OrDefault` variants (`firstOrDefault`, `singleOrDefault`, `lastOrDefault`) return `null`
  (default) instead of throwing when no element is found.
- Never swallow errors silently.

---

## Naming Conventions

| Context | Convention | Example |
|---|---|---|
| Prototype methods | camelCase | `toComma`, `groupBy`, `fixNumber` |
| Private-style Object prototype methods | underscore prefix | `_deepCopy`, `_toJson`, `_pick` |
| Utility functions | camelCase | `decimalAdjust`, `binarySearch` |
| Type declaration files | match native type name | `number.ts`, `array.ts` |
| Test files | `<name>.test.ts` | `number.test.ts` |

---

## Dependencies

- **`decimal.js`** — all numeric arithmetic in Number prototype methods
- **`deep-clone`** — `_deepCopy` on Array and Object prototypes
- **Bun** — runtime, test runner, bundler
- **Biome** — linter and formatter (replaces ESLint + Prettier)
- **TypeScript** — type checking and declaration emit (`tsc`)
