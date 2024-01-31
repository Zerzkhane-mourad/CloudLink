const winston = require("winston");

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
    ],
    format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
});

const requestLoggerMiddleware = (req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
};

module.exports = requestLoggerMiddleware;
