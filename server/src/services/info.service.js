const os = require("os");

const getServerInfo = async (_, res, next) => {
    try {
        const info = {
            // node version
            nodeVersion: process.version,
            // server uptime
            uptime: process.uptime(),
            // server hostname
            hostname: os.hostname(),
            // server OS
            os: {
                type: os.type(),
                release: os.release(),
                platform: os.platform(),
                arch: os.arch(),
            },
            // server resources
            resources: {
                // cpus: os.cpus(),
                memory: {
                    free: os.freemem(),
                    total: os.totalmem(),
                },
            },
            date: /** YYYY-MM-DD */ new Date().toISOString().split("T")[0],
            time: /** HH:MM:SS */ new Date().toISOString().split("T")[1].split(".")[0],
        };

        res.json(info);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getServerInfo,
};
