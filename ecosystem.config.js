module.exports = {
    apps: [
        {
            name: 'nemo-webapp',
            script: 'server.js',
            error_file: "/app/logs/err.log-pm2.log",
            out_file: "/app/logs/log-pm2.log"
        },
    ],
};
