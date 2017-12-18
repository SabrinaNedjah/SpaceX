var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src",
        port: 1257
    });

    gulp.watch("src/assets/css/scss/*.scss", ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/*.scss").on('change', browserSync.reload);
    gulp.watch("src/*.php").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/assets/css/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
