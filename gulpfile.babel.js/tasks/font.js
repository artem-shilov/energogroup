import gulp from 'gulp';

//Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

//Плагины
import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

//Обработка Font
const font = () => {
  return gulp.src(path.font.src)
  .pipe(newer(path.font.dest))
  .pipe(fonter( {
  formats: ["ttf"]
  }))
  .pipe(fonter( {
    formats: ["woff"]
    }))
  .pipe(gulp.dest(path.font.dest))
  .pipe(fonter( {
    formats: ["ttf"]
    }))
  .pipe(ttf2woff2())
  .pipe(gulp.dest(path.font.dest))
}
export default font;
