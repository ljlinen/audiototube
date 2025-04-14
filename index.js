// index.js
const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const HOST = process.env.VERCEL_URL || "http://localhost:";

app.get('/', (req, res) => {
  console.log(process.env)
  res.send('Running host: ', HOST, ' port; ', PORT, ' from env: ', process.env);
});

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}${PORT}`);
});
