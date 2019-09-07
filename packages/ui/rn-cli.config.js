const path = require('path');

const config = {
  resolver: {
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(__dirname, `node_modules/${name}`),
    }),
    assetExts: ['png', 'ttf', 'css'],
  },
  watchFolders: [
    path.resolve(__dirname),
    path.resolve(__dirname, '../typeface-roboto'),
    path.resolve(__dirname, '../ui'),
  ],
};

module.exports = config;
