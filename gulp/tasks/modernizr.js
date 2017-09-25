var gulp = require('gulp'),
modernizr = require('gulp-modernizr'); //this lets us build customised modernizr package; we point at our css and js files and modernizr checks what needs to be tested

gulp.task('modernizr', function() {
   return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
       "options": [
           "setClasses"
       ]
   }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
