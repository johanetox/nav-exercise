/*
  those are my favorite libraries to work on FrontEnd development,
  they all have been curated over the time to always work with the best
*/

const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync').create();

// sass tasks: adds vendor prefixes, compresses it, and updates browser
gulp.task('sass', () =>
  gulp.src('frontend/scss/main.scss')
    .pipe(postcss([autoprefixer()]))
    .pipe(sass({
      sourceComments: false,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/styles/'))
    .pipe(browserSync.stream())
);

// javascript tasks: Using babel in order to compile ES6 syntax into ES5, then minify it!
gulp.task('js', () =>
  gulp.src('frontend/js/main.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'))
    .pipe(browserSync.stream())
);

// just a task for images optimization, it works with jpeg, jpg, svg, gif, png
gulp.task('images', () =>
  gulp.src('frontend/images/*')
    .pipe(imagemin({ verbose: false }))
    .pipe(gulp.dest('public/images/'))
);

// just refreshes on html change
gulp.task('html', () => {
  gulp.src('frontend/index.html')
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.stream())
});

// sass lint ftw love including to always keep best coding practices
gulp.task('sass_lint', () => {
  const gulpStylelint = require('gulp-stylelint');
  return gulp
    .src('frontend/scss/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
});

// Runs static server with some default task then watches html/scss/js files
gulp.task('default', ['sass', 'js', 'html', 'images'], () => {

  // Just a copy/paste task to keep public file untouch
  gulp.src('frontend/fonts/*').pipe(gulp.dest('public/fonts/'));
  gulp.src('frontend/vendors/*').pipe(gulp.dest('public/vendors/'));
  browserSync.init({
    server: {
      baseDir: 'public/'
    }
  });
  gulp.watch('frontend/scss/**/*.scss', ['sass']);
  gulp.watch('frontend/js/main.js', ['js']);
  gulp.watch('frontend/index.html', ['html']);
});
