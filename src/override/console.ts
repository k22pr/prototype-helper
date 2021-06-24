export {};
const consola = require("consola");

function showMessage(type: "info" | "warn" | "error", ...message: any) {
  consola[type](...message);
}
console.log = function (...message: any) {
  if (process.env.NODE_ENV != "production") showMessage("info", ...message);
};
console.info = function (...message: any) {
  if (process.env.NODE_ENV != "production") showMessage("info", ...message);
};
console.warn = function (...message: any) {
  showMessage("warn", ...message);
};
console.error = function (...message: any) {
  showMessage("error", ...message);
};

globalThis.console = console;
