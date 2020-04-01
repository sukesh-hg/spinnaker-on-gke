require('@google-cloud/trace-agent').start();
const express = require('express');
const app = express();
const path = require('path');
const got = require('got');
const DISCOVERY_URL = 'https://www.googleapis.com/discovery/v1/apis';

app.get('/', async (req, res) => {
  console.log('App received a request.');
  try {
    res
      .status(200)
      .sendFile(path.join(__dirname+'/templates/index.html'));
      //__dirname : It will resolve to your project folder.
  }
  catch (err) {
    console.error(err);
    res
      .status(500)
      .end();
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('App listening on port', port);
});
