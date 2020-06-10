module.exports = {
  "plugins": [
    "@babel/plugin-transform-modules-commonjs",
    "transform-es2015-modules-commonjs",
    "@babel/plugin-transform-classes"
  ],
  "presets": [
    "es2015",
    "stage-0",
    "@babel/preset-env",
    "@babel/env",
    "env"
  ]
}