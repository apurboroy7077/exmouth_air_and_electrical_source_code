const gulp = require("gulp");
const { parallel, src } = require("gulp");
const gulpMinifyCssNames = require("gulp-minify-cssnames");

function miniClassName() {
  return gulp
    .src(["./src/*.html", "./src/**/*.css", "./src/**/*.js"])
    .pipe(
      gulpMinifyCssNames({
        postfix: "",
        prefix: "ud-",
      })
    )
    .pipe(gulp.dest("build"));
}

exports.default = parallel(miniClassName);
