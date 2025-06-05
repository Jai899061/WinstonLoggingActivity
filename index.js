// logger.error("Error message");
// logger.warn("Warning message");

// winston.emerg("Emergency");
// winston.crit("Critical");
// winston.warning("Warning");
// logger.fatal("fatal!");
// logger.trace("trace!");
// logger.info("Info message");

// const childLogger = logger.child({
//   requestId: "f9ed4675f1c53513c61a3b3b4e25b4c0",
// });

// childLogger.info("Info message");
// childLogger.error("Error message");

// const childLogger = logger.child({
//   requestId: "f9ed4675f1c53513c61a3b3b4e25b4c0",
// });

// childLogger.info("File uploaded successfully", {
//   file: "something.png",
//   type: "image/png",
//   userId: "jdn33d8h2",
// });

// logger.error(new Error("an error"));
// console.log(logger);
// throw new Error("An uncaught error");
// logger.profile("test");
// setTimeout(() => {
//   logger.profile("test");
// }, 1000);

import winston from "winston";

const serviceALogger = winston.loggers.get("serviceALogger");
const serviceBLogger = winston.loggers.get("serviceBLogger");

serviceALogger.error("logging to a file");
serviceBLogger.warn("logging to the console");
