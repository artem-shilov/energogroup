import gulp from 'gulp';

//Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

//Плагины
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import concat from 'gulp-concat';
import plumber from 'gulp-plumber';

//Обработка JavaScript
const js = () => {
  return gulp.src(path.js.src, {sourcemaps: app.isDev})
  .pipe(plumber())
  .pipe(babel())
  .pipe(webpack(app.webpack))
  .pipe(concat("main.min.js"))
  .pipe(gulp.dest(path.js.dest, {sourcemaps: app.isDev}))
}
export default js;
