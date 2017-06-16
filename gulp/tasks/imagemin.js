'use strict';

import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';
import config      from '../config';

gulp.task('imagemin', function() {

  return gulp.src(config.src.images)
    .pipe(gulpif(global.isProd, imagemin()))
    .pipe(gulp.dest(config.dest.images))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));

});
