const { getDefaultConfig } = require('metro-config');
const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

module.exports = {
  resolver: {
    ...defaultResolver,
    sourceExts: [
      ...defaultResolver.sourceExts,
      'jsx',
      'js',
      'ts',
      'tsx',
      'cjs',
    ],
  },
};
