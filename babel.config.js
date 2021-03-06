module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true}],
    ["babel-plugin-styled-components",
     {
       // Simpler display names for styled components (useful for
       // testing with enzyme.find())
       "fileName": false
     }],
    ["emotion"]
  ];

  return {
    presets,
    plugins
  };
}
