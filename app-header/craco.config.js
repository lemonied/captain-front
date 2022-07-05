
const packageName = require('./package.json').name;

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.externals = {
        'react': 'React',
        'react-dom': 'ReactDOM',
      };
      webpackConfig.output.filename = `${packageName}.js?_=${process.env.REACT_APP_TIMESTAMP}`;
      webpackConfig.output.library = {
        name: `${packageName}-[name]`,
        type: 'umd',
      };
      webpackConfig.output.chunkLoadingGlobal = `webpackJsonp_${packageName}`;
      return webpackConfig;
    },
  },
};
