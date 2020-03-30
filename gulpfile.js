const { src, dest, series } = require("gulp");
const clean = require("gulp-clean");

function clear() {
  return src("./dest/**/*").pipe(clean());
}

function copy() {
  return src("./src/**/*").pipe(dest("./build"));
}

exports.build = series(clear, copy);
