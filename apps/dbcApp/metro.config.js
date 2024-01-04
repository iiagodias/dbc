const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = {
  watchFolders: [
    workspaceRoot
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
