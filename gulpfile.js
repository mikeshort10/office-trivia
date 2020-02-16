// @ts-check
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

gulp.task("tailwind", () => {
  return gulp
    .src("public/*.css")
    .pipe(postcss([tailwind, autoprefixer]))
    .pipe(gulp.dest("public/build"));
});

gulp.task("watch_css", () => {
  gulp.watch("public/*.css", gulp.series("tailwind"));
  gulp.watch("tailwind.config.js", gulp.series("tailwind"));
});
