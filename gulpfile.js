const { src, dest, watch, series } = require('gulp');
const bro = require('gulp-bro');

const files = {
  client: './client/scripts/*.js',
};

const client = () => {
  return src(files.client).pipe(bro()).pipe(dest('./public/dist'));
};

const watchTask = () => {
  watch([files.client], client);
};

exports.default = series(client, watchTask);
