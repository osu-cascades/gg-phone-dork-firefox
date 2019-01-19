
module.exports = function(api) {
  api.cache(false);
  return {
    "presets": [
      ["@babel/preset-env", {
        forceAllTransforms: true,
        useBuiltIns: "usage",
        debug: process.env.BABEL_DEBUG == 'true' ? true : false
      }]
    ]
  };
};
