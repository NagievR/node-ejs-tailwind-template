const express = require('express');
const connectLivereload = require('connect-livereload');
const livereload = require('livereload');
const path = require('path');

const app = express();

app.use(connectLivereload());
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client', 'views', 'pages'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about');
});

const server = app.listen(3333, () => {
  console.log(
    `The application started on http://localhost:${server.address().port}/`
  );
});
