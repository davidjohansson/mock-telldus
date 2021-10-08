'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const hour = new Date().getHours();

  const ret = {
    basement1: hour + 70 + Math.floor(Math.random() * 3),
    attic1: hour + 60 + Math.floor(Math.random() * 3)
  }

  res.send(ret);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
