'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('watch', ['browserSync'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  gulp.watch(config.src.styles,               ['sass']);
  gulp.watch(config.src.images,               ['imagemin']);
  gulp.watch(config.src.views,                ['pug']);

});
