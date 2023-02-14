import gulp from 'gulp';

//Конфигурация
import path from '../config/path.js';
import app from '../config/app.js';

//Плагины
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpCss  from 'gulp-webpcss';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

//Обработка SCSS
const scss = () => {
  return (
    gulp
      .src(path.scss.src, { sourcemaps: app.isDev })
      .pipe(sass())
      .pipe(groupCssMediaQueries())
      .pipe(webpCss(app.webpCss))
      .pipe(autoprefixer())
      .pipe(concat('main.css'))
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(csso())
      .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
      .pipe(browserSync.reload({ stream: true }))
  );
};
export default scss;
