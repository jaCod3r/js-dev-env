import express from 'express';
import path from 'path';
import open from 'open';

const port = 8000;

//creates instance
const app = express();

//which routes to handle
app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
  });

app.listen(port, function(err){
  if (err) {
    console.log(err);
    }
  else {
      open('http://localhost:' + port);
    }
  });

