/* Setting up webpack to merge javascript files into 1 file */
var gulp = require('gulp'),
webpack = require('webpack'); /* for this to work, webpack had to be installed both globally and locally */

gulp.task('scripts', ['modernizr'], function(callback){
    return webpack(require('../../webpack.config.js'), function(err, stats){
        // handling error messages
        if (err) {
            console.log(err.toString());
        }
        // displaying stats
        console.log(stats.toString());
        callback();
    });
    
});