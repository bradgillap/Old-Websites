const gulp = require('gulp');
var bower = require('gulp-bower');
var changed = require('gulp-changed');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

 

gulp.task('js', function(){
   gulp.src('src/scripts/*.js')
   .pipe(concat('main.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/js/'));
});

gulp.task('css', function(){
   gulp.src('src/css/*.css')
   .pipe(concat('main.css'))
   .pipe(minify())
   .pipe(gulp.dest('dist/css/'));
});

gulp.task('imagemin', function() {
   var imgSrc = 'src/img/*.+(png|jpg|gif)',
   imgDst = 'dist/img';
   
   gulp.src(imgSrc)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});

gulp.task('htmlmin', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copyfonts', function() {
   gulp.src('bower_components/materialize/dist/fonts/roboto/*.{woff2,eot,ttf,woff,eof,svg}')
   .pipe(gulp.dest('dist/fonts'));
});

gulp.task('copymisc', function() {
   gulp.src('src/*.{png,xml,ico,txt}')
   .pipe(gulp.dest('dist/'));
});



gulp.task('bower', function() {
  return bower();
});

gulp.task('default',['bower','js','css','imagemin','htmlmin','copyfonts','copymisc'],function(){
});