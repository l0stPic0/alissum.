module.exports = {
  apps: [
    {
      name: 'AlissumFront',
      script: 'npm',
      args: 'start',
      env: {
        NO_PROXY: '*',
      },
      env_production: {
        NO_PROXY: '*',
      },
    },
  ],
};
