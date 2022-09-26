const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
});

function amError() {
    throw new Error("amError function");
}

try {
    amError();
}   catch(e) {
    logger.log("error", e.toString())
}