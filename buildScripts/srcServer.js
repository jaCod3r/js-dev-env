import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 8000;

//creates instance
const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//which routes to handle
app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
  });

app.listen(port, function(err){
  if (err) {
    console.log(err); //eslint-disable-line no-console
    }
  else {
      open('http://localhost:' + port);
    }
  });

