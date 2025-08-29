module.exports = {
    apps: [
        {
            name: "backend-dev",
            script: "src/index.js",
            env: {
                NODE_ENV: "dev",
                PORT: 3001
            }
        },
        {
            name: "backend-test",
            script: "src/index.js",
            env: {
                NODE_ENV: "test",
                PORT: 3002
            }
        },
        {
            name: "backend-staging",
            script: "src/index.js",
            env: {
                NODE_ENV: "staging",
                PORT: 3003
            }
        }
    ]
};
