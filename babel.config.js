module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    ["@babel/preset-react", { 
      runtime: "automatic" 
    }]
  ]
};
// This Babel configuration file sets up the environment for React development.