module.exports = function({ env }) {
  return {
    sass: {
      loaderOptions: {
        webpackImporter: false,
      }
    }
      // babel: {
      //   "plugins": [
      //     ["@babel/plugin-proposal-decorators", { "legacy": true }],
      //     ["@babel/plugin-proposal-class-properties", { "loose": true }]
      //   ]
      // }
  };
}