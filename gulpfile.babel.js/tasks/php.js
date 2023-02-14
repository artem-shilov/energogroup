import gulp from 'gulp';

//Конфигурация
import path from '../config/path.js';


//Плагины
import plumber from 'gulp-plumber';

//Обработка PHP
const php = () => {
  return gulp.src(path.php.src)
    .pipe(plumber())
    .pipe(gulp.dest(path.php.dest))
}
export default php;