import dayjs from "dayjs";
const consola = require("consola");
var newConsole: Console = console;

function showMessage(type: "info" | "warn" | "error", message: any) {
  consola[type](message);
}
newConsole.log = function (message: any) {
  if (process.env.NODE_ENV != "production") showMessage("info", message);
};
newConsole.info = function (message: any) {
  if (process.env.NODE_ENV != "production") showMessage("info", message);
};
newConsole.warn = function (message: any) {
  showMessage("warn", message);
};
newConsole.error = function (message: any) {
  showMessage("error", message);
};

globalThis.console = newConsole;
