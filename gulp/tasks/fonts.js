'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('fonts', function() {

  return gulp.src([config.src.fonts])
    .pipe(gulp.dest(config.dest.fonts));

});
