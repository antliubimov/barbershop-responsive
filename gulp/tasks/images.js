// Images.js

/* Запускаем минификацию изображений */

const gulp = require("gulp");
const imagemin = require('gulp-imagemin');

module.exports = function images() {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/img'));
}
