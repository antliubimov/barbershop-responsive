// script.js

/* Запускаем минификацию js */

const gulp = require("gulp");
const minifyjs = require("gulp-uglify");
const rename = require("gulp-rename");
const server = require("browser-sync").create();

module.exports = function script() {
  return gulp.src("source/js/script.js")
    .pipe(minifyjs())
    .pipe(gulp.dest("build/js"))
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
}