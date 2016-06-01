var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function(){
  gulp.src('./scss/*.scss')
    .pipe(sass({outputStyle : 'expanded'}))
    .pipe(gulp.dest('./develop/css'));
});

gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('default', ['watch']);