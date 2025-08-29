const { spawn } = require('child_process');

const envs = [
    { NODE_ENV: 'dev', PORT: 3001 },
    { NODE_ENV: 'test', PORT: 3002 },
    { NODE_ENV: 'staging', PORT: 3003 }
];

envs.forEach(cfg => {
    const proc = spawn('node', ['src/index.js'], {
        env: { ...process.env, ...cfg },
        stdio: 'ignore',
        detached: true
    });
    proc.unref();
});

console.log('✅ Todos los servidores fueron lanzados en segundo plano.');
