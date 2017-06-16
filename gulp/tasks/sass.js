'use strict';

import gulp         from 'gulp';
import sass         from 'gulp-sass';
import gulpif       from 'gulp-if';
import uncss        from 'gulp-uncss';
import sourcemaps   from 'gulp-sourcemaps';
import browserSync  from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import handleErrors from '../util/handle-errors';
import config       from '../config';

gulp.task('sass', function() {

  return gulp.src(config.src.styles)
    .pipe(gulpif(!global.isProd, sourcemaps.init()))
    .pipe(sass({
      //sourceComments: global.isProd ? false : 'map',
      outputStyle: global.isProd ? 'compressed' : 'nested'
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    // .pipe(uncss({
    //         html: ['./app/index.html']
    //     }))
    .pipe(gulpif(!global.isProd, sourcemaps.write('.')))
    .pipe(gulp.dest(config.dest.styles))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});
