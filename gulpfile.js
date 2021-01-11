const through = require('through2');
const gulp = require('gulp');
const spawn = require('child_process').spawn;

//= ================================== Global Variable ===================================


//= ================================== Method ===================================

const replaceSpecialWording = (str, replaceWording, id) => {
  if (str.indexOf(replaceWording) == -1) {
    return str;
  }

  if (str.indexOf(' ==> ') != -1) {
    return str;
  }

  return str.replace(`${replaceWording} `, `${replaceWording} ${id} ==> `);
}

const getSpecialLetters = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
  let out = '';

  for (let i = 0, clen = chars.length; i < len; i++) {
    out += chars.substr(0 | Math.random() * clen, 1);
  }

  return out;
}

const generateUIDNotMoreThan1million = function () {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4)
}

const getNewBuffer = (buffer) => {
  const str = buffer.toString();
  const arr = str.split('\n');

  if (arr.length == 0) {
    return buffer;
  }

  let id = getSpecialLetters(4);
  //const id = generateUIDNotMoreThan1million();
  const newArr = [];

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

  const newStr = newArr.join('\n');
  return Buffer.from(newStr);
}

const addTagForFeatureFiles = () => {
  const toProcess = () => {
    // creating a stream through which each file will pass
    const stream = through.obj(function (file, enc, done) {
      if (file.isBuffer()) {
        file.contents = getNewBuffer(file.contents);
      }

      // make sure the file goes through the next gulp plugin
      this.push(file);

      // tell the stream engine that we are done with this file
      done();
    });

    return stream;
  }

  return gulp.src('./features/**/*.feature')
    .pipe(toProcess())
    .pipe(gulp.dest('./features/'));
};


const cmd = (str) => async (cb) => {
  const arr = str.split(' ');
  const c0 = arr.shift();

  console.log('exec => ', str);
  await new Promise((resolve, reject) => {
    const ssp = spawn(c0, arr, { stdio: 'inherit' });
    ssp.on('close', (code) => {
      resolve(code);
    });

    ssp.on('error', function (err) {
      reject(err);
    });
  });

  cb();
};


//= ================================== Tasks ===================================

exports.test = cmd('cucumber-js --require features/tests.setup.js --require features/**/*.ts --format node_modules/cucumber-pretty');
exports.testCI = cmd("cucumber-js --require features/tests.setup.js --require features/**/*.ts");

exports.addTagForFeatureFiles = gulp.series(
  addTagForFeatureFiles,
  cmd("cucumber-js --require features/tests.setup.js --require features/**/*.ts --format node_modules/cucumber-pretty"),
);

exports.build = gulp.parallel(
  cmd('tsc -p ./tsconfig.json'),
  cmd('tsc -p ./tsconfig.esm5.json'),
);
