// startServers.js
const { spawn } = require('child_process');
const concurrently = require('concurrently');

const proc = concurrently([
    { command: 'npm run dev', name: 'dev' },
    { command: 'npm run test', name: 'test' },
    { command: 'npm run staging', name: 'staging' }
], {
    killOthers: ['failure', 'success'],
    restartTries: 0,
    detached: true,
});

proc.result.then(() => { }, () => { });
proc.processes.forEach(p => p.unref());
