const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
//added this middleware
const history = require('connect-history-api-fallback');

const app = express();
//started middleware
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 8080;
app.listen(port);
console.log('server started ' + port);