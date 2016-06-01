var gulp = require('gulp');
var sass = require('gulp-sass');
// var compass     = require('gulp-compass');
 
gulp.task('sass', function(){
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./develop/css'));
});

// gulp.task('compass',function(){
//     gulp.src(['./scss/**/*.scss'])
//         .pipe(compass({
//             config_file : 'config.rb',
//             comments : false,
//             css : 'css/',
//             sass: 'scss/'
//         }));
// });

gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('default', ['watch']);