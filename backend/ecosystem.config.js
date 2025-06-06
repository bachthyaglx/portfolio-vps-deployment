module.exports = {
  apps: [
    {
      name: 'backend',
      script: './src/index.js',
      cwd: './', // current working directory
      instances: 1, // number of instances to run
      autorestart: true, // auto restart if app crash
      watch: false, // don't watch for file changes
      max_memory_restart: '512M', // restart if memory usage exceeds 512MB
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
