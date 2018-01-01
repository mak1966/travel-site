var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
console.log('Now running the gulp Default Task:');
});

gulp.task('html', function(){
  console.log('Now running the gulp HTML Task:');
});

gulp.task('styles', function(){
  console.log('Now running the gulp STYLES Task:');
});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
