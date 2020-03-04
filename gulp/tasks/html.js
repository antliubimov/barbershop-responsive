// html.js

/* Запускаем posthtml c плагином include, чтобы автоматически вставить спрайт в html файл, минифицируем html */

const gulp = require("gulp");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const minifyhtml = require("gulp-htmlmin");
const server = require("browser-sync").create()


module.exports = function html() {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(minifyhtml({
      minifyJS: true,
      minifyURLs: true,
      collapseWhitespace: true,
      removeComments: true,
      sortAttributes: true,
      sortClassName: true
    }))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
};