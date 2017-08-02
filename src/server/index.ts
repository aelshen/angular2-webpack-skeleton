import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

let app = express();
let server;

app.use(express.static(path.join(__dirname, '../client')));

app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});