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
const temp = {
  log: console.log.bind(this),
  info: console.log.bind(this),
  warn: console.log.bind(this),
  error: console.log.bind(this),
};

// let leftLogList: any[] = [];
// let rightLogList: any[] = [];

function getTime() {
  const nowDate = new Date();
  return `${nowDate.getHours().fixNumber(2)}:${nowDate.getMinutes().fixNumber(2)}:${nowDate
    .getSeconds()
    .fixNumber(2)}:${`${nowDate.getMilliseconds()}`.fixNumber(3)}`;
}

function showMessage(
  type: "log" | "info" | "warn" | "error",
  message?: any,
  ...optionalParams: any[]
) {
  const color = ["\x1b[2m"];
  if (type === "info") color[0] = "\x1b[34m";
  else if (type === "warn") color[0] = "\x1b[33m";
  else if (type === "error") color[0] = "\x1b[31m";
  // if (type == "info")
  //   leftLogList.push([message, ...optionalParams]);
  // else if (type == "warn" || type == "error")
  //   rightLogList.push([message, ...optionalParams]);

  temp[type](`${color[0]}[${getTime()}]\x1b[0m\x1b[37m`, message, ...optionalParams);
}

console.useTheme = useTheme;

function useTheme(
  consoleOption = {
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
  }
) {
  console.log = (message?: any, ...optionalParams: any[]) => {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.log) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.log) ||
      !process.env.NODE_ENV
    )
      showMessage("log", message, ...optionalParams);
  };
  console.info = (message?: any, ...optionalParams: any[]) => {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.info) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.info) ||
      !process.env.NODE_ENV
    )
      showMessage("info", message, ...optionalParams);
  };
  console.warn = (message?: any, ...optionalParams: any[]) => {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.warn) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.warn) ||
      !process.env.NODE_ENV
    )
      showMessage("warn", message, ...optionalParams);
  };
  console.error = (message?: any, ...optionalParams: any[]) => {
    if (
      (process.env.NODE_ENV === "development" && consoleOption.development.error) ||
      (process.env.NODE_ENV === "production" && consoleOption.production.error) ||
      !process.env.NODE_ENV
    )
      showMessage("error", message, ...optionalParams);
  };

  globalThis.console = console;
}

export {};
