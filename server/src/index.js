const express = require("express");
const cors = require("cors");
const requestLoggerMiddleware = require("./middlewares/logger");
const router = require("./routes");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use(requestLoggerMiddleware);

app.use(router);

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
