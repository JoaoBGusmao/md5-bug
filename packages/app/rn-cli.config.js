const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

const config = {
  resolver: {
    blacklistRE: blacklist([
      /.*\/__snapshots__\/.*/,
      /.*\.test\..*/,
      /.*\/packages\/ui\/node_modules\/.*/,
    ]),
    extraNodeModules: new Proxy({}, {
      get: (target, name) => path.join(__dirname, `node_modules/${name}`),
    }),
    assetExts: ['png', 'ttf', 'css'],
  },
  watchFolders: [
    path.join(__dirname, '../ui'),
    path.resolve(__dirname),
    path.resolve(__dirname, '../typeface-roboto'),
  ],
};

module.exports = config;
