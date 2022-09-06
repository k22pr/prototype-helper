export { };

interface ConsoleShowOption {
  log: boolean;
  info: boolean;
  warn: boolean;
  error: boolean;
}

interface ConsoleOption {
  development: ConsoleShowOption;
  production: ConsoleShowOption;
}

declare global {
  interface Console {
    show(message?: any, ...optionalParams: any[]): void;
    useTheme(consoleOption?: ConsoleOption): void;
  }
}


const TH = this;
const temp = {
  log: console.log.bind(TH),
  info: console.log.bind(TH),
  warn: console.log.bind(TH),
  error: console.log.bind(TH),
}

function getTime() {
  const nowDate = new Date();
  return `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}:${`${nowDate.getMilliseconds()}`.padStart(3, "0")}`;
}

function showMessage(type: "info" | "warn" | "error", message?: any, ...optionalParams: any[]) {
  temp[type](`\x1b[2m[${getTime()}]\x1b[0m\x1b[37m`, message, optionalParams);
}

console.useTheme = useTheme;


function useTheme(consoleOption = {
  development: {
    log: true,
    info: true,
    warn: true,
    error: true,
  },
  production: {
    log: false,
    info: false,
    warn: true,
    error: true,
  },
}) {

  console.log = function (message?: any, ...optionalParams: any[]) {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.log) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.log) ||
      !process.env.NODE_ENV
    )
      showMessage("info", message, optionalParams);
  };
  console.info = function (message?: any, ...optionalParams: any[]) {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.info) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.info) ||
      !process.env.NODE_ENV
    )
      showMessage("info", message, optionalParams);
  };
  console.warn = function (message?: any, ...optionalParams: any[]) {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.warn) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.warn) ||
      !process.env.NODE_ENV
    )
      showMessage("warn", message, optionalParams);
  };
  console.error = function (message?: any, ...optionalParams: any[]) {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.error) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.error) ||
      !process.env.NODE_ENV
    )
      showMessage("error", message, optionalParams);
  };

  globalThis.console = console;
}
