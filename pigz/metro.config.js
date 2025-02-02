const { getDefaultConfig } = require("metro-config");

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: ["bin", "mp4", "svg"], 
  },
};
