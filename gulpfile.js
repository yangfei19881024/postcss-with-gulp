var gulp = require('gulp');
var postcss = require('gulp-postcss');
//自动加上各个浏览器前缀
var autoprefixer = require('autoprefixer');
//使用未来css
var cssnext = require('cssnext');
//写出sass-like 语法 支持 $变量，for ，mixin ,extend 不过语法有变化
var precss = require('precss');

//遇到错误不会终止进程插件
var plumber = require('gulp-plumber');

gulp.task('styles',function(){
  var processors = [
    autoprefixer({browsers: ['last 2 version']}),
    cssnext,
    precss
  ];

  return gulp.src('app.css')
          .pipe(plumber())
          .pipe(postcss(processors))
          .pipe(gulp.dest('./dest'));
});

gulp.task('default',function(){
  gulp.watch('**/*.css',['styles']);
})
