const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const cssnano = require('gulp-cssnano');
const concatCss = require('gulp-concat-css');

gulp.task("styles", function() {
  return gulp
    .src("./src/style.css")
    .pipe(concatCss("./style.css"))
    .pipe(autoprefixer({browsers: [`last 2 version`]}))
    .pipe(cssnano())
    .pipe(gulp.dest("./"))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
gulp.task("dev", gulp.series("styles", "browserSync", function() {
  gulp.watch("src/**/*.css", "styles");
  gulp.watch("**/*.html", gulp.series("styles", browserSync.reload));
}));
