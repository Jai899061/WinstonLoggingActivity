import winston from "winston";

// const logLevels = {
//   fatal: 0,
//   error: 1,
//   warn: 2,
//   info: 3,
//   debug: 4,
//   trace: 5,
// };

// const logger = winston.createLogger({
//   levels: logLevels,
//   level: process.env.LOG_LEVEL || "info",
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()],
// });

// const { combine, timestamp, json } = winston.format;

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(timestamp(), json()),
//   transports: [new winston.transports.Console()],
// });

// const { combine, timestamp, printf, colorize, align } = winston.format;

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(
//     colorize({ all: true }),
//     timestamp({
//       format: "YYYY-MM-DD hh:mm:ss.SSS A",
//     }),
//     align(),
//     printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
//   ),
//   transports: [new winston.transports.Console()],
// });

// const { combine, timestamp, json } = winston.format;

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(timestamp(), json()),
//   transports: [
//     new winston.transports.File({
//       filename: "combined.log",
//     }),
//     new winston.transports.File({
//       filename: "app-error.log",
//       level: "error",
//     }),
//   ],
// });

// const errorFilter = winston.format((info, opts) => {
//   return info.level === "error" ? info : false;
// });

// const infoFilter = winston.format((info, opts) => {
//   return info.level === "info" ? info : false;
// });

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(timestamp(), json()),
//   transports: [
//     new winston.transports.File({
//       filename: "combined.log",
//     }),
//     new winston.transports.File({
//       filename: "app-error.log",
//       level: "error",
//       format: combine(errorFilter(), timestamp(), json()),
//     }),
//     new winston.transports.File({
//       filename: "app-info.log",
//       level: "info",
//       format: combine(infoFilter(), timestamp(), json()),
//     }),
//   ],
// });

// import "winston-daily-rotate-file";
// const { combine, timestamp, json } = winston.format;

// const fileRotateTransport = new winston.transports.DailyRotateFile({
//   filename: "combined-%DATE%.log",
//   datePattern: "YYYY-MM-DD",
//   maxFiles: "14d",
// });

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   format: combine(timestamp(), json()),
//   transports: [fileRotateTransport],
// });

// // fired when a log file is created
// fileRotateTransport.on("new", (filename) => {});
// // fired when a log file is rotated
// fileRotateTransport.on("rotate", (oldFilename, newFilename) => {});
// // fired when a log file is archived
// fileRotateTransport.on("archive", (zipFilename) => {});
// // fired when a log file is deleted
// fileRotateTransport.on("logRemoved", (removedFilename) => {});

// const logger = winston.createLogger({
//   level: process.env.LOG_LEVEL || "info",
//   defaultMeta: {
//     service: "admin-service",
//   },
//   format: winston.format.json(),
//   transports: [new winston.transports.Console()],
// });

// const { combine, timestamp, json } = winston.format;

// const logger = winston.createLogger({
//   level: "info",
//   format: combine(timestamp(), json()),
//   transports: [new winston.transports.Console()],
// });

// const { combine, timestamp, json, errors } = winston.format;

// const logger = winston.createLogger({
//   level: "info",
//   format: combine(errors({ stack: true }), timestamp(), json()),
//   transports: [new winston.transports.Console()],
// });

// const logger = winston.createLogger(
//   { exitOnError: false },
//   {
//     level: process.env.LOG_LEVEL || "info",
//     format: winston.format.json(),
//     transports: [new winston.transports.Console()],
//     exceptionHandlers: [
//       new winston.transports.File({ filename: "exception.log" }),
//     ],
//     rejectionHandlers: [
//       new winston.transports.File({ filename: "rejections.log" }),
//     ],
//   }
// );

winston.loggers.add("serviceALogger", {
  level: process.env.LOG_LEVEL || "info",
  defaultMeta: {
    service: "service-a",
  },
  format: winston.format.logstash(),
  transports: [
    new winston.transports.File({
      filename: "service-a.log",
    }),
  ],
});

winston.loggers.add("serviceBLogger", {
  level: process.env.LOG_LEVEL || "info",
  defaultMeta: {
    service: "service-b",
  },
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default logger;
