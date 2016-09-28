//gulp uses the nodemon to automatically restart the server for every change to the application
var gulp = require('gulp');
    nodemon = require('gulp-nodemon');
gulp.task('default', function(){
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: {
      PORT:8000    //dis will be default port used by the application. Can be changed
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
    console.log("server restarted");
  });
});
