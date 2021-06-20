'use strict'
require('es6-promise').polyfill();

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    rename        = require('gulp-rename'),
    imagemin      = require('gulp-imagemin'),
    browserSync   = require('browser-sync').create(),
    reload        = browserSync.reload;


// gulp.task('default',gulp.series('sass','fileinclude','connect','watch'));
gulp.task('images', function() {
    return gulp.src('./images/*')
        .pipe(imagemin({ optimizationLevel: 7, progressive: true }))
        .pipe(gulp.dest('./images/dist'));
});


gulp.task('sass', function () {
  return gulp.src('./sass/style.scss')
    .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});


gulp.task('css', function () {
    return gulp.src('css/*.css')
    .pipe(gulp.dest('./'));
});

// gulp.task('concat', function() {
//   return gulp.src(['./dev/js/jquery-1.11.1.min.js','./dev/js/lib/*.js'])
//     .pipe(concat('libs.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./js/'));
// });

// gulp.task('watch',function(){
//   gulp.watch('dev/scss/*.scss',['sass']);
//   gulp.watch('dev/scss/*.sass',['sass']);
//   gulp.watch('dev/scss/**/*.scss',['sass']);
//   gulp.watch('dev/scss/**/.sass',['sass']);
//   gulp.watch('dev/chunks/*.html',['fileinclude']);
//   gulp.watch('dev/templates/*.html',['fileinclude']);
//   gulp.watch(['*.html'], ['html']);
//   gulp.watch(['css/*.css'], ['css']);
// });
gulp.task('default', gulp.series('sass', 'images'));
