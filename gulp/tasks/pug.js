'use strict';

import pug    from 'gulp-pug';
import gulp   from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import config from '../config';
import del    from 'del';

gulp.task('pug', function buildHTML() {
  return gulp.src(config.src.views)
    .pipe(pug({
              pretty: true,
              ext: '.html'
          }))
  .pipe(gulp.dest(config.dest.dir))
  .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});
