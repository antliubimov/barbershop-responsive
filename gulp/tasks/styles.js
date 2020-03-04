// styles.js

/* Задание запускает препроцессор, собирает файл css, делает префиксы, миминизирует и снова сохраняет в папку build */

const gulp = require("gulp");
const plumber = require("gulp-plumber");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const minify = require("gulp-csso");
const rename = require("gulp-rename");
const server = require("browser-sync").create();

module.exports = function styles() {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
};