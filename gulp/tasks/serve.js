// serve.js

/* Живой сервер разработки, отслеживает изменения в  less и html  файлах, и если фиксирует их
прогоняет через все наши зависимости и загружает страницу с изменениями */

const gulp = require("gulp");
const server = require("browser-sync").create();
const styles = require('./styles');

module.exports = function serve(cb) {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series(styles)).on('change', server.reload);
  gulp.watch("source/*.js", gulp.series(script)).on('change', server.reload);
  gulp.watch("source/*.html", gulp.series(html)).on("change", server.reload);
  return cb();
};