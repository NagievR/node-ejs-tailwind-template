
DOT FORGET FOR DEPLOY!

  "scripts": {
    "clear:dist": "rm -rf ./public/dist",
    "tailwind:watch": "postcss client/styles/tailwind.css -o public/dist/style.css --watch",
    "app:watch": "nodemon -e ejs,js",
    "gulp": "gulp",
    "dev": "concurrently \"npm run clear:dist\" \"npm run tailwind:watch\" \"npm run gulp\" \"npm run app:watch\"",
    "build": "concurrently \"npm run clear:dist\" && gulp build && npx tailwindcss -i client/styles/tailwind.css -o public/dist/style.css --minify",
    "serve": "set NODE_ENV=prod && pm2 start index.js",
    "stop-serve": "pm2 delete index.js"
  },

const { src, dest, watch, series, task } = require("gulp");
const bro = require("gulp-bro");

const files = {
  client: "./client/scripts/*.js",
};

const client = () => {
  return src(files.client).pipe(bro()).pipe(dest("./public/dist"));
};

const watchTask = () => {
  watch([files.client], client);
};

task("build", () => client());

exports.default = series(client, watchTask);
