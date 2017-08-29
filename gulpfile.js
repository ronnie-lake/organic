var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpLess = require('gulp-less');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('less', function() {
	gulp.src('./less/main.less') //путь к файлу
		.pipe(plumber()) //позволяет не обрываться операции [5]
		.pipe(gulpLess()) //компиляций less в css [3]
		.pipe(autoprefixer({  //автопрефиксер
			browsers: ['> 5%']
		}))
		.pipe(cleanCss()) //минификация css
		.pipe(gulp.dest('./css/')); //куда записать итоговый файл
});

gulp.task('js', function() {
	gulp.src('./js/main.js')
		.pipe(plumber())
		.pipe(uglify())  //минификация js
		.pipe(gulp.dest('./js/build/'));
});

gulp.task('build', function(){
	gulp.start('less');  // запустить task less
	gulp.start('js');
});

gulp.task('server', function(){
	return browserSync({  //запуск сервера
	    port: 9000,
	    server: {
	      baseDir: './' // текущая папка
	    }
	  });
});

gulp.task('watch', function(){  //следит за файлами
	gulp.watch([
	    './*.html', //путь к файлам
	    './js/*.js',
	    './css/*.css'
	  ]).on('change', browserSync.reload);  //при изменении этих файлов -  перезагрузить страницу
	watch('./less/*.less', function() {
    	gulp.start('less');
  	});
  	watch('./js/*.js', function() {
    	gulp.start('js');
  	});
});


gulp.task('default', ['build','server', 'watch']);  //
//стандартная таска, которая капускается комадной gulp 
//выполняются таски из переданного массива по порядку