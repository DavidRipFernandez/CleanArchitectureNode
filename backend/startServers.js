// startServers.js
const concurrently = require('concurrently');

concurrently([
    { command: 'npm run dev', name: 'dev', prefixColor: 'green' },
    { command: 'npm run test', name: 'test', prefixColor: 'yellow' },
    { command: 'npm run staging', name: 'staging', prefixColor: 'magenta' }
], {
    killOthersOnFailure: false,
    restartTries: 0,
    detached: true
}).catch(() => { });
