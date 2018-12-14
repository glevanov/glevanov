const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const csso = require("gulp-csso");

gulp.task("styles", function() {
  return gulp
    .src("./src/style.css")
    .pipe(autoprefixer())
    .pipe(csso())
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
gulp.task("dev", gulp.series("browserSync", function() {
  gulp.watch("./src/style.css", ["styles"]);
  gulp.watch("./*.html", browserSync.reload);
}));
