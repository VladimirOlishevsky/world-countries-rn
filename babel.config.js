module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: ['babel-preset-expo', '@babel/preset-env', '@babel/preset-react'],
    env: {
      test: {
        plugins: ["@babel/plugin-transform-runtime"]
      }
    }
  };
};
