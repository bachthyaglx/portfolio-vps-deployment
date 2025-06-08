module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './',
      watch: true,
      watch_ignore: ['node_modules', 'logs'],
    },
  ],
};
