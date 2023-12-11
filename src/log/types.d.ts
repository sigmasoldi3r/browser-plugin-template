export type LogLevel = "info" | "warn" | "error" | "panic" | "debug";

export type AbstractLogger = {
  [Key in LogLevel]: (message: string, ...args: any[]) => void;
};
