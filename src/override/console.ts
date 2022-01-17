export {};
const consola = require("consola");

function getTime() {
  const nowDate = new Date();
  return `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}:${`${nowDate.getMilliseconds()}`.padStart(3, "0")}`;
}

function showMessage(type: "info" | "warn" | "error", ...message: any) {
  consola[type](`\x1b[2m[${getTime()}]\x1b[0m\x1b[37m`, ...message);
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
