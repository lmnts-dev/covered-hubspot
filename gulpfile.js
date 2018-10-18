var gulp = require("gulp");
var inlineCss = require("gulp-inline-css");
var run = require("gulp-run");
var notify = require("gulp-notify");
var browserSync = require("browser-sync").create();

// inliner task
gulp.task("inline", function() {
  return gulp
    .src("./src/_site/*.html")
    .pipe(inlineCss())
    .pipe(gulp.dest("build/"));
});

// watch for new generated jekyll files and inline them
gulp.task("watch", function() {
  return gulp.watch(["./src/_site/*.html"], ["inline"]);
});

// serve & compile jekyll
gulp.task("serve", function() {
  var shellCommand = "cd src && bundle exec jekyll serve";
  return gulp
    .src("")
    .pipe(run(shellCommand))
    .pipe(notify({ message: "🍕 uninlined server running at localhost:4000" }));
});

// use default task to launch Browsersync and watch JS files
gulp.task("default", ["serve", "watch"], function() {
  // serve files from inlined src folder
  browserSync.init({
    server: {
      baseDir: "./build/",
      port: 8080
    }
  });
  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch("./build/*.html", browserSync.reload());
  gulp.pipe(notify({ message: "✅ inlined server running at localhost:8080" }));
});
