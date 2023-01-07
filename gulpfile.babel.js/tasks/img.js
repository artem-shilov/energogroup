import gulp from 'gulp';

//Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

//Плагины
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpif from 'gulp-if';

//Обработка Image
const img = () => {
  return gulp.src(path.img.src)
  .pipe(newer(path.img.dest))
  .pipe(webp())
  .pipe(gulp.dest(path.img.dest))
  .pipe(gulp.src(path.img.src))
  .pipe(newer(path.img.dest))
  .pipe(gulpif(app.isProd, imagemin()))
  .pipe(gulp.dest(path.img.dest))
}
export default img;