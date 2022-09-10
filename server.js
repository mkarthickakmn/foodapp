const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.use(favicon(__dirname + '/chatter_box.png'));
// Serve static files....
app.use(express.static(__dirname + '/dist/angular'));

// // Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular/index.html'));
});
server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
});