var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync').create();

gulp.task('styles', function() {
	return gulp.src('src/styles/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('dist/styles'))
			.pipe(browsersync.stream());
});

gulp.task('scripts', function() {
	 return gulp.src('src/scripts/main.js')
    .pipe(gulp.dest('dist/scripts'))
    .pipe(browsersync.stream());
})

gulp.task('assets', function() {
	return gulp.src('src/assets/**/*')
			.pipe(gulp.dest('dist'))
			.pipe(browsersync.stream());
})

gulp.task('copy', function() {
	return gulp.src('src/index.html')
	.pipe(gulp.dest('dist'))
	.pipe(browsersync.stream());
});


gulp.task('serve', function() {
	browsersync.init({
		server: './dist'
	});

	gulp.watch('src/styles/*.scss', ['styles']);
	gulp.watch('src/scripts/*.js', ['scripts']);
	gulp.watch('src/*.html', ['copy']);
	gulp.watch('src/assets/**/*', ['assets']);
});

gulp.task('default', ['styles', 'scripts', 'copy', 'assets', 'serve']);
