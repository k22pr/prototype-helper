// export { };

// interface ConsoleShowOption {
//   log: boolean;
//   info: boolean;
//   warn: boolean;
//   error: boolean;
// }

// interface ConsoleOption {
//   development: ConsoleShowOption;
//   production: ConsoleShowOption;
// }

// declare global {
//   interface Console {
//     option: ConsoleOption;
//     show(message?: any, ...optionalParams: any[]): void;
//   }
// }

// function getTime() {
//   const nowDate = new Date();
//   return `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}:${`${nowDate.getMilliseconds()}`.padStart(3, "0")}`;
// }

// console.option = {
//   development: {
//     log: true,
//     info: true,
//     warn: true,
//     error: true,
//   },
//   production: {
//     log: false,
//     info: false,
//     warn: true,
//     error: true,
//   },
// };

// function showMessage(type: "info" | "warn" | "error", ...message: any) {
//   console[type](`\x1b[2m[${getTime()}]\x1b[0m\x1b[37m`, ...message);
// }
// console.show = console.log.bind(this);

// console.log = function (...message: any) {
//   // if (
//   //   (process.env.NODE_ENV === "development" && console.option.development.log) ||
//   //   (process.env.NODE_ENV === "production" && console.option.production.log)
//   // )
//   showMessage("info", ...message);
// };
// console.info = function (...message: any) {
//   // if (
//   //   (process.env.NODE_ENV === "development" && console.option.development.info) ||
//   //   (process.env.NODE_ENV === "production" && console.option.production.info)
//   // )
//   showMessage("info", ...message);
// };
// console.warn = function (...message: any) {
//   // if (
//   //   (process.env.NODE_ENV === "development" && console.option.development.warn) ||
//   //   (process.env.NODE_ENV === "production" && console.option.production.warn)
//   // )
//   showMessage("warn", ...message);
// };
// console.error = function (...message: any) {
//   // if (
//   //   (process.env.NODE_ENV === "development" && console.option.development.error) ||
//   //   (process.env.NODE_ENV === "production" && console.option.production.error)
//   // )
//   showMessage("error", ...message);
// };

// globalThis.console = console;
