const { src, dest, series, parallel } = require("gulp");
const clean = require("gulp-clean");
const imageMin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");

function clear() {
  return src("./build").pipe(clean());
}

function copy() {
  return src("./src/**/*").pipe(dest("./build"));
}

function minifyImages() {
  return src("./src/img/**/*")
    .pipe(imageMin())
    .pipe(dest("./build/img"));
}

function scripts() {
  return src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(concat("script.js"))
    .pipe(dest("./build/js"));
}

function css() {
  return src("./src/css/estilo.css")
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest("./build/css"));
}

exports.build = series(clear, copy, minifyImages, parallel(scripts, css));
