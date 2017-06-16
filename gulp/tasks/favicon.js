'use strict';

import gulp        from 'gulp';
import config      from '../config';

gulp.task('favicon', function() {

    return gulp.src('./favicon.png')
      .pipe(gulp.dest(config.dest.dir));

});
