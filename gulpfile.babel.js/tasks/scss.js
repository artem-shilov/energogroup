import gulp from 'gulp';

//Конфигурация
import path  from '../config/path.js';
import app  from '../config/app.js';

//Плагины
import autoprefixer  from 'gulp-autoprefixer';
import csso  from 'gulp-csso';
import rename  from 'gulp-rename';
import concat  from 'gulp-concat';
// import webpCss  from 'gulp-webp-css';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

//Обработка SCSS
const scss = () => {
  return gulp.src(path.scss.src, {sourcemaps: app.isDev})
  .pipe(sass())
  // .pipe(webpCss())
  .pipe(autoprefixer())
  .pipe(concat('main.min.css'))
  // .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
  // .pipe(rename({ suffix: '.min'}))
  .pipe(csso())
  .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
  .pipe(browserSync.reload({stream: true}))
}
export default scss;

