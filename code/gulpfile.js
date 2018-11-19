'use strict';

let gulp = require('gulp');
let shell = require('gulp-shell');
let merge = require('merge-stream');
let rimraf = require('rimraf');
let through = require('through2');

let ts = require('gulp-typescript');
let sourcemaps = require('gulp-sourcemaps');
let path = require('path');

//=================================== Method ===================================

let tsCompiler = (
  pathArr,
  tsconfigPath,
  sourceRoot,
  targetPath,
  isUglify) => {

  return gulp.src(pathArr)
    .pipe(sourcemaps.init())
    .pipe(ts.createProject(tsconfigPath)())
    .js
    //.pipe(uglify())
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: sourceRoot,
    }))
    .pipe(gulp.dest(targetPath));
};

let tsdCompiler = function (
  pathArr,
  tsconfigPath,
  targetPath
) {

  let tscP = ts.createProject(tsconfigPath, {
    'isolatedModules': false,
  });

  return gulp.src(pathArr)
    .pipe(tscP())
    .dts
    .pipe(gulp.dest(targetPath));
};

let getCopyFilesPipe = (sourcePatten, targetPath) => {
  return gulp.src(sourcePatten)
    .pipe(gulp.dest(targetPath));
};

let addTagForFeatureFiles = () => {
  // creating a stream through which each file will pass
  let stream = through.obj(function (file, enc, done) {
    if (file.isBuffer()) {

      let b = getNewBuffer(file.contents);
      file.contents = b;

    }

    // make sure the file goes through the next gulp plugin
    this.push(file);

    // tell the stream engine that we are done with this file
    done();
  });

  let getNewBuffer = (buffer) => {
    let str = buffer.toString();
    let arr = str.split('\n');

    if (arr.length == 0)
      return buffer;

    let id = getSpecialLetters(4);
    //let id = generateUIDNotMoreThan1million();
    let newArr = [];

    if (arr[0].indexOf('@') != 0) {
      newArr.push(`@${id}`);
    } else {
      id = arr[0].replace('@', '')
    }

    for (let item of arr) {
      let s = item;
      s = replaceSpecialWording(s, 'Given', id);
      s = replaceSpecialWording(s, 'When', id);
      s = replaceSpecialWording(s, 'Then', id);
      s = replaceSpecialWording(s, 'And', id);
      s = replaceSpecialWording(s, 'But', id);

      newArr.push(s);
    }

    let newStr = newArr.join('\n');
    return new Buffer(newStr);
  }

  let replaceSpecialWording = (str, replaceWording, id) => {
    if (str.indexOf(replaceWording) == -1)
      return str;

    if (str.indexOf(' ==> ') != -1)
      return str;

    return str.replace(`${replaceWording} `, `${replaceWording} ${id} ==> `);
  }

  let getSpecialLetters = (len) => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_',
      out = '';

    for (let i = 0, clen = chars.length; i < len; i++) {
      out += chars.substr(0 | Math.random() * clen, 1);
    }

    return out;
  }

  let generateUIDNotMoreThan1million = function () {
    return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
  }

  return stream;
};

//=================================== Tasks ===================================

gulp.task('clean', (cb) => {
  rimraf('./test', () => {
    rimraf('./dist', cb);
  });
});

gulp.task('addTagForFeatureFiles', () => {
  return gulp.src('./src/**/*.feature')
    .pipe(addTagForFeatureFiles())
    .pipe(gulp.dest('./src/'));
})

gulp.task('copy_feature_to_test', () => {
  let m = merge();

  let test = gulp.src([
    './src/**/*.feature',
  ]).pipe(gulp.dest('./test/'));
  m.add(test);

  return m;
});

gulp.task('ts_compile_test', () => {

  let m = merge();

  let test = tsCompiler(
    [
      './src/**/*.ts',
    ],
    'tsconfig_test.json',
    '../src',
    './test',
    false
  );
  m.add(test);

  return m;
});

gulp.task('ts_compile_dist', () => {
  let m = merge();

  let code = tsCompiler(
    [
      './src/code/**/*.ts',
    ],
    'tsconfig.json',
    '../src/code',
    './dist/code',
    false
  );
  m.add(code);

  let main = tsCompiler(
    [
      './src/main.ts',
    ],
    'tsconfig.json',
    '../src',
    './dist/',
    false
  );
  m.add(main);

  return m;
});

gulp.task('tsd_compile_dist', () => {
  let m = merge();

  let code = tsdCompiler(
    [
      './src/code/**/*.ts',
    ],
    'tsconfig.json',
    './dist/code'
  );
  m.add(code);

  let main = tsdCompiler(
    [
      './src/main.ts',
    ],
    'tsconfig.json',
    './dist/'
  );
  m.add(main);


  return m;
});

gulp.task('run_cucumber', shell.task([
  'cucumber.js test/**/*.feature --format progress'
  //'cucumber.js --format pretty'
]));

gulp.task('create_ts_definitions', shell.task([
  'tsc --declaration ./src/main.ts'
  //'cucumber.js --format pretty'
]));

//----------------------------------------------------------------------

gulp.task('default', gulp.series(
  'clean',
  'addTagForFeatureFiles',
  gulp.parallel(
    'ts_compile_test',
    'ts_compile_dist',
    'tsd_compile_dist',
    'copy_feature_to_test',
  ),
  'run_cucumber',
), () => {
  console.log('done');
});


// gulp.task('default', (cb) => {
//   runSequence(
//     'clean',
//     'addTagForFeatureFiles',
//     [
//       'ts_compile_test',
//       'ts_compile_dist',
//       'tsd_compile_dist',
//       'copy_feature_to_test',
//     ],
//     [
//       'run_cucumber',
//     ],
//     cb
//   );
// });

