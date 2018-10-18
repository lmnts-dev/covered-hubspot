var gulp = require("gulp");
var inlineCss = require("gulp-inline-css");
var run = require("gulp-run");
var notify = require("gulp-notify");

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
gulp.task("jekyll", function() {
  var shellCommand = "cd src && bundle exec jekyll serve";
  return gulp
    .src("")
    .pipe(run(shellCommand))
    .pipe(notify({
        message: "👁 uninlined server running from /src/ at localhost:4000"
      }));
});

// use default task to launch simpleHTTP
gulp.task("serve", function() {
  // serve files from inlined src folder
  var shellCommand = "cd build && python -m SimpleHTTPServer 8080";
  return gulp
    .src("")
    .pipe(run(shellCommand))
    .pipe(notify({ message: "🐬 l&m jekyll email builder v1.0" }))
    .pipe(notify({ message: "👉 all systems are go" }))
    .pipe(notify({
        message: "✅ inlined server running from /build/ at localhost:8080"
      }));
});

// run all of the above
gulp.task("default", ["serve", "jekyll", "watch"]);
